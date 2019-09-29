// sql语句
var sqlMap = {
  /** 客户资料表 */
  customer: {
    /** 修改所属行业 */
    select_by_indestry:
      "SELECT DictKey, DictValue from jd_com_dict_item WHERE FieldName = 'Industtry'"
  },
  /** 客户账号表 */
  user: {
    /** 获取原始密码 */
    select_password_by_cid:
      'SELECT Password from jd_mall_customer_login WHERE CustomerID = ?',
    /** 查询所有 */
    select_by_phone: 'select * from vi_customer_login where 1=1 '
  }
};

module.exports = sqlMap;
