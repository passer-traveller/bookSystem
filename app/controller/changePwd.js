// 密码修改
'use strict';

const Controller = require('egg').Controller;

class pwdController extends Controller {
    async index() {
        await this.ctx.render('changePwd.nj');
    }
}

module.exports = pwdController;
