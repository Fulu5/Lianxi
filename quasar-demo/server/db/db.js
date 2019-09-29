const mysql = require('mysql');
// 连接上数据库(连接池)
const pool = mysql.createPool({
  host: '172.18.20.1',
  user: 'root',
  password: 'sa',
  port: '3307',
  database: 'jd_bcp_dev'
});
/* 封装数据库操作方法query--用于增删改查 */
const query = function(sql, sqlParams, callback) {
  pool.getConnection(function(err, conn) {
    if (err) {
      callback(err, null, null);
    } else {
      conn.query(sql, sqlParams, function(qerr, vals, fields) {
        debugger;
        // 释放连接
        conn.release();
        // 事件驱动回调
        callback(qerr, vals, fields);
      });
    }
  });
};
/* 模块输出 */
module.exports = query;
