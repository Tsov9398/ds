$(function () {
    // 1.点击上部的li，当前li 添加current类，其余兄弟移除类
    $(".bd_nav p").click(function () {
        // 链式编程操作
        $(this).addClass("bd_nav_active").siblings().removeClass("bd_nav_active");
        // 2.点击的同时，得到当前li 的索引号
        var index = $(this).index();
        // console.log(index);
        // 3.让下部里面相应索引号的item显示，其余的item隐藏
        $(".tab_con .item").eq(index).show().siblings().hide();
    })
})


$(function(){
    $('.pm_back').click(function(){
        window.location.href="../home/index.html";
    })
});
$(function(){
    $('.pm_end').click(function(){
        window.location.href="../home/auction_2.html";
    })
});
$(function(){
    $('.pm_all').click(function(){
        window.location.href="../home/auction.html";
    })
});