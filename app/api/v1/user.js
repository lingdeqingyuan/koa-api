const Router = require('koa-router');
const { RegisterValidator } = require('../../validators/validator');
const router = new Router({
  prefix: '/v1/user'
});

router.post('/register', async (ctx, next) => {
  console.log(ctx.body)
  const v = await new RegisterValidator().validate(ctx);
})

module.exports = router;