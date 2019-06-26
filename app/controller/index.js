// 系统主页
'use strict';

const Controller = require('egg').Controller;

class ViewController extends Controller {
  async index() {
    await this.ctx.render('index.nj');
  }
}

module.exports = ViewController;
