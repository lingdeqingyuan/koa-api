const { HttpException } = require("../core/http-exception")

const catchError = async (ctx, next) => {
  try {
    await next()
  } catch (error) {
    if (global.config.env === 'dev') {
      throw error;
    }
    if (error instanceof HttpException) {
      ctx.body = {
        error_code : error.errorCode,
        msg: error.msg,
        request: `${ctx.method} ${ctx.path}`
      }
      ctx.status = error.code
    } else {
      ctx.body = {
        error_code: 999,
        msg: 'we make a mistake~',
        request: `${ctx.method} ${ctx.path}`
      };
      ctx.status = 500;
    }
  }
}

module.exports = catchError