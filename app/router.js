'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  // router.get('/', controller.home.index);
  router.get('/test', controller.test.index);
  router.get('/', controller.view.index);
  // 图书添加
  router.get('/bookAdd/view', controller.bookAdd.index);
  router.post('/bookAdd/add', controller.bookAdd.add);
  // router.post('/bookAdd/list', controller.bookAdd.list);
  // 图书上架
  router.get('/bookShelves/view', controller.bookShelves.index);
  router.get('/njTest', controller.njTest.index);
  // // 图书维护
  // router.get('/maintain', controller.maintain.index);
  // // 会员管理
  // router.get('/member', controller.member.index);
  // // 图书出借
  // router.get('/bookLending', controller.bookLending.index);
  // // 图书归还
  // router.get('/bookReturn', controller.bookReturn.index);
  // // 修改密码
  // router.get('/changePwd', controller.maintain.index);
  // // 退出系统
  // router.get('/quitSys', controller.maintain.index);
};
