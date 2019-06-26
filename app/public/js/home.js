;$('#publishDate').datetimepicker({
    format: 'YYYY-MM-DD',
    locale: moment.locale('zh-cn'),
    showClose:false	//是否显示关闭 按钮
});
$(document).ready(function() {
    // 新增图书
    $('#bookAddBtn').on('click', function(){
        $.get('/bookAdd/view', function(info){
            console.log('----->> ', info)
            $('#model').html(info)
        })
    })
    // 图书上架
    $('#shelvesBtn').on('click', function(){
        $.get('/bookShelves/view', function(info){
            console.log('----->> ', info)
            $('#model').html(info)
        })
    })
    // 图书维护
    // 会员管理
    // 图书出借
    // 图书归还
    // 密码修改
    // 退出系统

    $('#bookAdd').on('click', function(){
        $.get('/bookAdd/view', function(info){
            console.log('----->> ', info)
            $('#model').html(info)
        })
    })
    // $('#njTest').on('click', function(){
    //     $.get('/njTest', function(info){
    //         console.log('----->> ', info)
    //         $('#model').html(info)
    //     })
    // })
} );
