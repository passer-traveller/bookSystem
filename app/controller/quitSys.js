// 退出系统
'use strict';

const Controller = require('egg').Controller;

class quitController extends Controller {
    async index() {
        await this.ctx.render('quitSys.nj');
    }
}

module.exports = quitController;
