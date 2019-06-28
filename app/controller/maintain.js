// 图书维护
'use strict';

const Controller = require('egg').Controller;

class maintainController extends Controller {
    async index() {
        await this.ctx.render('maintain.nj');
    }
}

module.exports = maintainController;
