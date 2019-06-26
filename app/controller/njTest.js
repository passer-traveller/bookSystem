// njTestController
'use strict';

const Controller = require('egg').Controller;

class njTestController extends Controller {
  async index() {
    await this.ctx.render('njTest.nj');
  }
}

module.exports = njTestController;
