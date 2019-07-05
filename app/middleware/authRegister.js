module.exports = (options, app) => {
    console.log('options --->> ', options, app)
    return async function login(ctx, next) {
        // console.log('hello middleware');
        console.log('auth --> ', ctx.request.body.userName, ctx.request.body)
        // if (ctx.session.user) {
        if (ctx.request.body.userName && (ctx.request.body.password1 === ctx.request.body.password1)) {
            await next();
        } else {
            ctx.redirect('/register');
        }
    }
}