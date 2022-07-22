const { HttpException } = require("../core/http-exception")

const catchError = async (ctx, next) => {
  try {
    await next()
  } catch (error) {
    const isDev = global.config.env === 'dev';
    const isHttpException = error instanceof HttpException;
    if (isDev && !isHttpException) {
      throw error;
    }

    if (isHttpException) {
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