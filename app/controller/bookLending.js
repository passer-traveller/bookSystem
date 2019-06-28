// 图书出借
'use strict';

const Controller = require('egg').Controller;

class lendController extends Controller {
    async index() {
        await this.ctx.render('bookLending.nj');
    }
}

module.exports = lendController;
