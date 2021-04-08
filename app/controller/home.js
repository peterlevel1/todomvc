'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }

  async todos() {
    console.log('=== todos ===');
    await this.ctx.render('todos.tpl', {
      pathPrefix: '/public/todos/'
    });
  }
}

module.exports = HomeController;
