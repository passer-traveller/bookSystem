'use strict';

const Service = require('egg').Service;

class bookAddService extends Service {
  async add(data) {
    const bookDate = new Date();
    /* *
        图书编号
        书籍条码
        图书名称
        图书作者
        出版社编号
        出版日期
        图书分类
        图书原价
        图片
        收藏总数
        可借总数
        书架位置
        上架时间
        */
    const result = await this.app.mysql.insert('books', {
    //   bookId: 'bookId' + bookDate.getTime(),
      barCode: data.barCode,
      bookName: data.bookName,
      author: data.author,
      publisherId: data.publisherId,
      publishDate: data.publishDate,
      bookCategory: data.bookCategory,
      unitPrice: data.unitPrice,
      bookImage: '',
      bookCount: data.bookCount,
      remainder: '',
      bookPosition: data.bookPosition,
      regTime: bookDate.toLocaleDateString(),
    });
    // 判断插入成功
    const insertSuccess = result.affectedRows === 1;
    console.log('insertSuccess --->> ', insertSuccess);
    return insertSuccess;
  }
  async list() {
    const results = await this.app.mysql.select('books');
    const dataString = JSON.stringify(results);
    const data = JSON.parse(dataString);
    return data;
  }
}

module.exports = bookAddService;
