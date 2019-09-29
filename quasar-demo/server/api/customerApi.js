/* eslint-disable no-debugger */
const express = require('express');
// 定义路由级中间件
const router = express.Router();
// 引入数据库连接池，防止数据库超过最大连接数
var query = require('../db/db');
// 加载sqlMapper文件
var $sql = require('../db/sqlMap');

/**
 * 响应结果封装
 * @param {*} res 请求
 * @param {*} code 响应码   -1响应失败,出错、0响应成功
 * @param {*} msg 响应提示
 * @param {*} data  响应数据
 */
var resResult = function(res, code, msg, data) {
  var objResult = {};
  objResult.code = code;
  objResult.msg = msg;
  objResult.data = data;
  res.send(objResult);
};

// 查看所属行业
router.get('/indestry', (req, res) => {
  var sql = $sql.customer.select_by_indestry;
  query(sql, null, function(err, result) {
    console.log('The sql is : %s', sql);
    debugger;
    if (err) {
      resResult(res, -1, err.message, null);
    } else {
      resResult(res, 3, '响应成功', result);
    }
  });
});

module.exports = router;
