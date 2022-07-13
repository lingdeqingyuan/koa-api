const Router = require('koa-router');
const HttpException = require('../../../core/http-exception');

const router = new Router();

router.get('/v1/classic/latest', (ctx, next) => {
  const error = new HttpException('错误1', 20000, 400)
  throw error;
  ctx.body = {
    key: 'classic'
  }
})

module.exports = router;