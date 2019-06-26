// 图书上架
'use strict';

const Controller = require('egg').Controller;

class bookShelvesController extends Controller {
  async index() {
    const data = {
      name: '图书上架',
    };
    await this.ctx.render('bookShelves.nj', data);
  }
}

module.exports = bookShelvesController;
