// 系统主页
'use strict';

const Controller = require('egg').Controller;

class ViewController extends Controller {
  async index() {
    const data = {
      viewFlag: true,
      name: '首页',
      url: '/public/image/img1.jpg',
    };
    await this.ctx.render('view.nj', data);
  }
}

module.exports = ViewController;
