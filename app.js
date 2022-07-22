const Koa = require('koa');
const BodyParser = require('koa-bodyparser');
const InitManager = require('./core/init');
const catchError = require('./middlewares/exception') 

const app = new Koa();

app.use(BodyParser())

app.use(catchError)

InitManager.initCore(app);

app.listen(3003, () => {
  console.log('server started!')
})