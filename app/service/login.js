'use strict';

const Service = require('egg').Service;

class loginService extends Service {
    async login(name, pwd) {
        const results = await this.app.mysql.get('sysadmins', {
            adminName: name,
            loginPwd: pwd
        });
        // const results = await this.app.mysql.select('sysadmins', {
        //     where: {
        //         adminName: name,
        //         loginPwd: pwd
        //     },
        //     columns: ['adminId', 'statusId'], // 要查询的表字段
        // });
        // console.log('results -------->> ', results)
        // const data = results ? results[0].adminId : '';
        // const dataString = JSON.stringify(results);
        // const data = JSON.parse(dataString);
        return JSON.parse(JSON.stringify(results));
    }
    async list() {
        const results = await this.app.mysql.select('books');
        const dataString = JSON.stringify(results);
        const data = JSON.parse(dataString);
        return data;
    }
}

module.exports = loginService;
