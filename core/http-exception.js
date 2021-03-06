class HttpException extends Error {
  constructor(msg = '服务器异常', errorCode = 10001, code = 400) {
    super()
    this.errorCode = errorCode
    this.code = code
    this.msg = msg
  }
}

// 参数异常类
class ParameterException extends HttpException {
  constructor(msg, errorCode) {
    super()
    this.code = 400
    this.msg = msg || '参数错误'
    this.errorCode = errorCode || 10000
  }
}

// 创建成功类
class Success extends HttpException {
  constructor(msg, errorCode) {
    super()
    this.code = 201
    this.msg = msg || 'ok'
    this.errorCode = errorCode || 0
  }
}

module.exports = {
  HttpException,
  ParameterException,
  Success
}
