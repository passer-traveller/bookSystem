'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    // const { ctx } = this;
    // ctx.body = 'hi, egg';
    await this.ctx.render('test.nj');
  }
}

module.exports = HomeController;
