// 图书添加
'use strict';

const Controller = require('egg').Controller;

class bookAddController extends Controller {
  async index() {
    const data = {
      viewFlag: false,
      name: '图书添加',
      body: 'this is bookAdd!',
      listData: await this.ctx.service.bookAdd.list(this.ctx.request.body),
    };
    await this.ctx.render('bookAdd.nj', data);
  }
  async add() {
    const res = await this.ctx.service.bookAdd.add(this.ctx.request.body);
    if (res) {
      const data = {
        listData: await this.ctx.service.bookAdd.list(),
      };
      await this.ctx.render('bookAdd.nj', data);
    }
  }
}

module.exports = bookAddController;
