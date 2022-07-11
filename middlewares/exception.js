const catchError = async (ctx, next) => {
  try {
    await next()
  } catch (error) {
    ctx.body = '服务器内部错误'
  }
}

module.exports = catchError