# Axios

Axios 是一个基于 promise 的 HTTP 库，可以用在浏览器和 node.js 中

## 安装

```js
// npm
$ npm install axios
// vue-cli3
$ vue add axios
```

## 请求方法的别名

```js
axios.get(url[, config])
axios.post(url[, data[, config]])
```

## 请求配置选项（config）

```js
// `url` 是用于请求的服务器 URL。url 是必需的
url: '/user',
// `data` 是作为请求主体被发送的数据
// 只适用于这些请求方法 'PUT', 'POST', 和 'PATCH'
data: {
    firstName: 'Fred'
}
```

## 响应结构

```js
{
// `data` 由服务器提供的响应
data: {},
// `status` 来自服务器响应的 HTTP 状态码
status: 200,
// `statusText` 来自服务器响应的 HTTP 状态信息
statusText: 'OK',
// `headers` 服务器响应的头
headers: {},
// `config` 是为请求提供的配置信息
config: {}
}
```

## 配置的优先顺序

库的默认值 < 实例的 defaults 属性 < 请求的 config 参数

```js
// 使用由库提供的配置的默认值来创建实例
// 此时超时配置的默认值是 `0`
var instance = axios.create();

// 覆写库的超时默认值
// 现在，在超时前，所有请求都会等待 2.5 秒
instance.defaults.timeout = 2500;

// 为已知需要花费很长时间的请求覆写超时设置
instance.get('/longRequest', {
  timeout: 5000
});
```

## 拦截器

在请求或响应被 then 或 catch 处理前拦截它们

```js
// 添加请求拦截器
axios.interceptors.request.use(
  function(config) {
    // 在发送请求之前做些什么 return config;
  },
  function(error) {
    // 对请求错误做些什么 return Promise.reject(error);
  }
);
```

## 添加响应拦截器

```js
axios.interceptors.response.use(
  function(response) {
    // 对响应数据做点什么
    return response;
  },
  function(error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  }
);
```

## error.response.status

```js
200: '服务器成功返回请求的数据。',
201: '新建或修改数据成功。',
202: '一个请求已经进入后台排队（异步任务）。',
204: '删除数据成功。',
400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
401: '用户没有权限（令牌、用户名、密码错误）。',
403: '用户得到授权，但是访问是被禁止的。',
404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
406: '请求的格式不可得。',
410: '请求的资源被永久删除，且不会再得到的。',
422: '当创建一个对象时，发生一个验证错误。',
500: '服务器发生错误，请检查服务器。',
502: '网关错误。',
503: '服务不可用，服务器暂时过载或维护。',
504: '网关超时。',
```
