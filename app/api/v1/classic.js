const Router = require('koa-router');
const { PositiveIntegerValidator } = require('../../validators/validator');

const router = new Router();

router.get('/v1/:id/classic/latest', async (ctx, next) => {
  const v = await new PositiveIntegerValidator().validate(ctx);
  // ctx.body = 'fail'
})

module.exports = router;