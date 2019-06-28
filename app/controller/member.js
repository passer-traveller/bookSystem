// 会员管理
'use strict';

const Controller = require('egg').Controller;

class memberController extends Controller {
    async index() {
        await this.ctx.render('member.nj');
    }
}

module.exports = memberController;
