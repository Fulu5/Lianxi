const express = require('express');
// 定义路由级中间件
const router = express.Router();
// 引入数据库连接池，防止数据库超过最大连接数
var query = require('../db/db');
// 加载sqlMapper文件
var $sql = require('../db/sqlMap');
var crypto = require('crypto');

/**
 * 响应结果封装
 * @param {*} res 请求
 * @param {*} apiName 请求Api名
 * @param {*} code  响应编码  -1响应出错、-2token失效、0响应成功、1用户名输入错误、2密码输入错误、3更新失败、4修改密码失败
 * @param {*} msg 响应提示信息
 * @param {*} data 响应数据结果
 */
var resResult = function(res, apiName, code, msg, data) {
  var objResult = {};
  objResult.code = code;
  objResult.msg = msg;
  objResult.data = data;
  res.send(objResult);
};

/**
 * md5加密
 */
var md5Password = function(value) {
  const md5 = crypto.createHash('md5');
  md5.update(value);
  return md5.digest('hex');
};

// 验证原始密码
router.put('/validatePassword', (req, res) => {
  var sql = $sql.user.select_password_by_cid;
  if (req.body.CustomerID) {
    var sqlParams = [req.body.CustomerID];
    query(sql, sqlParams, function(err, result) {
      if (err) {
        resResult(res, 'validatePassword', -1, err.message, null);
      } else if (
        result != null &&
        result !== undefined &&
        result[0] !== undefined
      ) {
        if (md5Password(req.body.oldPassword) === result[0].Password) {
          resResult(res, 'password', 0, '验证通过', null);
        } else {
          resResult(res, 'password', -2, '验证失败', null);
        }
      } else {
        resResult(res, 'password', -2, '验证失败', null);
      }
    });
  }
});

module.exports = router;
