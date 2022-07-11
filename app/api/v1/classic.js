const Router = require('koa-router');

const router = new Router();

router.get('/v1/classic/latest', (ctx, next) => {
  throw new Error('11')
  ctx.body = {
    key: 'classic'
  }
})

module.exports = router;