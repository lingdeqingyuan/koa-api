const { db } = require("../../core/db");
const { Sequelize, Model } = require('sequelize');

class User extends Model {

}

User.init({
  // 主键 
  // 不能为空 不能重复
  // 数字 禁用随机字符串
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nickname: Sequelize.STRING,
  email: Sequelize.STRING,
  password: Sequelize.STRING,
  openid: {
    type: Sequelize.STRING(64),
    unique: true
  }
}, {
  sequelize: db,
  tableName: 'user'
})
