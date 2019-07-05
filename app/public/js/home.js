;$('#publishDate').datetimepicker({
    format: 'YYYY-MM-DD',
    locale: moment.locale('zh-cn'),
    showClose:false	//是否显示关闭 按钮
});
$(document).ready(function() {
    btnQuery('bookAddBtn', '/bookAdd/view'); // 新增图书
    btnQuery('shelvesBtn', '/bookShelves/view'); // 图书上架
    btnQuery('maintainBtn', '/maintain'); // 图书维护
    btnQuery('memberBtn', '/member'); // 会员管理
    btnQuery('bookLendingBtn', '/bookLending'); // 图书出借
    btnQuery('bookReturnBtn', '/bookReturn'); // 图书归还
    btnQuery('changePwdBtn', '/changePwd'); // 密码修改
    // btnQuery('quitSysBtn', '/quitSys'); // 退出系统

    function btnQuery(id, url) {
        $('#' + id).on('click', function(){
            $.get(url, function (info) {
                console.log('----->> ', info)
                $('#model').html(info)
            })
        })
    }
    // $('#quitSysBtn').on('click', function () {
    //     $.get('/quitSys', function (info) {
    //         console.log('----->> ', info)
    //         // $('#model').html(info)
    //     })
    // })
} );
