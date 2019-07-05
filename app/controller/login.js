// 登陆页面
'use strict';

const Controller = require('egg').Controller;

class LoginController extends Controller {
    async index() {
        await this.ctx.render('login.nj');
    }
    async login() {
        const userName = this.ctx.request.body.userName;
        const password = this.ctx.request.body.password;
        const res = await this.ctx.service.login.login(userName, password);
        console.log('res ---->> ', res);
        if(res) {
            this.ctx.session.user = res;
            this.ctx.redirect('/');
        }else{
            this.ctx.redirect('/login');
        }
        // await this.ctx.render('login.nj');
        // if (res) {
            // const data = {
            //     listData: await this.ctx.service.bookAdd.list(),
            // };
            // await this.ctx.render('bookAdd.nj', data);
        // }
    }
    async logout() {
        this.ctx.session.user = null;
        this.ctx.redirect('/login');
        // const res = await this.ctx.service.bookAdd.add(this.ctx.request.body);
        // if (res) {
        //     const data = {
        //         listData: await this.ctx.service.bookAdd.list(),
        //     };
        //     await this.ctx.render('bookAdd.nj', data);
        // }
    }
}

module.exports = LoginController;
