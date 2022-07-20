const Router = require('koa-router')
const requireDirectory = require('require-directory')

class InitManager {
  // 入口方法
  static initCore(app) {
    InitManager.app = app
    InitManager.loadConfig()
    InitManager.initLoadRouters()
  }

  // 装载项目环境配置
  static loadConfig(path = '') {
    const configPath = path || process.cwd() + '/config/config.js'
    const config = require(configPath)
    global.config = config
  }

  // 自动导入api路由
  static initLoadRouters() {
    const apiDirectory = `${process.cwd()}/app/api`
    requireDirectory(module, '../app/api', {
      visit: whenLoadRouter,
    })

    function whenLoadRouter(module) {
      if (module instanceof Router) {
        InitManager.app.use(module.routes())
      }
    }
  }
}

module.exports = InitManager
