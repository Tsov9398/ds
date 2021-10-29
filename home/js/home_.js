


$(function(){
    $('.tj').click(function(){
        window.location.href="../home/index.html";
    })
});
$(function(){
    $('.bd').click(function(){
        window.location.href="../home/home_bd.html";
    })
});
$(function(){
    $('.zb').click(function(){
        window.location.href="../home/home_zb.html";
    })
});



// 搜索栏返回
$(function(){
    $('.sur_back').click(function(){
        window.history.go(-1);
    })
});




// 搜索栏进入
$(function(){
    $('.surch_').click(function(){
        window.location.href="../home/surch.html";
    })
});



// $(function(){
//     $('.masking1').click(function(){
//         $('this').addClass("dis_none");
//     })
// })

// $(this).addClass("current").siblings().removeClass("current");