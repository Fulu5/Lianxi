/* eslint-disable no-debugger */
/* eslint-disable no-unused-vars */
/* eslint-disable no-extra-boolean-cast */
/* eslint-disable no-console */
'use strict';

import Vue from 'vue';
import axios from 'axios';
import store from '../store';
import router from '../router';

// 设置 baseUrl
const baseUrl = '/api';

// 请求拦截器
axios.interceptors.request.use(
  config => {
    const tokenIsExist = !!store.getters['GET_TOKEN']; // 获取token信息
    if (tokenIsExist) {
      // 判断是否存在token，如果存在的话，则每个http header都加上token
      config.headers.Authorization = store.getters['GET_TOKEN'];
    } else {
      store.commit(
        'ADD_TOKEN',
        'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjo0NSwiaWF0IjoxNTY0NzA2MzEzLCJleHAiOjE1NjQ3MDk5MTN9.QUQh256KKFQYqc6hipazW62J1B-rkMCZoM3FvVFOFiC6bUQ-_DrpmnJJQ0y4EqMOdD3onNag7rfKMdkuDnVK7cps-anKF26dL6acWaHLWE6H_d35Uy5OCEQGjF1QZ2uNePzTX_2LkE6kaPZP0cOK15gMpEEJTNIR81Q-wL3AwmVfyC5kBE9Smbo_Jax4M-tq8akHdeKgwRpzb-ZYPqFNqmQySaJ9IEyn1Xo7_afIJSI1PQ3VtWLMlBAkjqpZMPZcpu6-Bf_SNCjYjsY8x4WikbvU7-nuhiXH25oHGfdKD0cgXKkvsM1MY8yeymBLwwJ-EKZXDpO9ENQDb0cmvEgcvA'
      );
    }
    return config;
  },
  err => {
    return Promise.reject(err);
  }
);

// 响应拦截器
axios.interceptors.response.use(
  function(response) {
    console.log(' 响应拦截, response.status is : %s', JSON.stringify(response));
    return response;
  },
  function(error) {
    console.log('response error, error status is : %s', error.response.status);
    return Promise.reject(error);
  }
);

// 请求封装
function formatReq(type, url, data) {
  return new Promise((resolve, reject) => {
    axios({
      method: type,
      url: `${baseUrl}${url}`,
      headers: {
        // 这里的请求头与后台商量设置
        'content-Type': 'application/json;charset=utf-8'
      },
      data: JSON.stringify(data)
    })
      .then(r => resolve(r))
      .catch(e => reject(e));
  });
}

const Http = {
  get: (url, query) => {
    if (!!query) {
      url += query;
    }
    return axios
      .get(`${baseUrl}${url}`, {
        headers: {
          // 这里的请求头与后台商量设置
          'content-Type': 'application/json;charset=utf-8'
        }
      })
      .then(r => r)
      .catch(e => e);
  },
  post: (url, data) => formatReq('post', url, data),
  put: (url, data) => formatReq('put', url, data)
};

export default Http;
