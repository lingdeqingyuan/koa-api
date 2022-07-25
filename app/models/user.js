const Bcrypt = require('bcryptjs');
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
  email: {
    type: Sequelize.STRING(128),
    unique: true
  },
  password: { 
    type: Sequelize.STRING,
    set(val) {
      const salt = Bcrypt.genSaltSync(10);
      const psw = Bcrypt.hashSync(val, salt);
      this.setDataValue('password', psw);
    } 
  },
  openid: {
    type: Sequelize.STRING(64),
    unique: true
  }
}, {
  sequelize: db,
  tableName: 'user'
})

module.exports = {
  User
}
