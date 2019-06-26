// 系统主页
'use strict';

const Controller = require('egg').Controller;

class homeController extends Controller {
  async index() {
    await this.ctx.render('home.nj');
  }
}

module.exports = homeController;
