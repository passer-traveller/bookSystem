// 图书归还
'use strict';

const Controller = require('egg').Controller;

class returnController extends Controller {
    async index() {
        await this.ctx.render('bookReturn.nj');
    }
}

module.exports = returnController;
