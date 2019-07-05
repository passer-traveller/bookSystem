module.exports = (options, app) => {
    return async function login(ctx, next) {
        // console.log('hello middleware');
        console.log('auth --> ', ctx.session.user)
        if(ctx.session.user){
            await next();
        }else{
            ctx.redirect('/login');
        }
    }
}