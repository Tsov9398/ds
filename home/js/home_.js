


$(function () {
    $('.tj').click(function () {
        window.location.href = "../home/index.html";
    })
});
$(function () {
    $('.bd').click(function () {
        window.location.href = "../home/home_bd.html";
    })
});
$(function () {
    $('.zb').click(function () {
        window.location.href = "../home/home_zb.html";
    })
});

$(function () {
    $('.auction').click(function () {
        window.location.href = "../home/auction.html";
    })
});

$(function () {
    $('.all_kind').click(function () {
        window.location.href = "../home/classify.html";
    })
});
$(function () {
    $('.home_bd').click(function () {
        window.location.href = "../home/home_bd.html";
    })
}); $(function () {
    $('.home_zb').click(function () {
        window.location.href = "../home/home_zb.html";
    })
}); $(function () {
    $('.home_bd').click(function () {
        window.location.href = "../home/index.html";
    })
});
$(function () {
    $('.home_message').click(function () {
        window.location.href = "../home/message.html";
    })
});


// 搜索栏返回
$(function () {
    $('.sur_back').click(function () {
        window.history.go(-1);
    })
});




// 搜索栏进入
$(function () {
    $('.surch_go').click(function () {
        window.location.href = "../home/surch.html";
    })
});



// $(function(){
//     $('.masking1').click(function(){
//         $('this').addClass("dis_none");
//     })
// })

// $(this).addClass("current").siblings().removeClass("current");


//小心心点击事件
$(function () {
    for (let i = 0; i <= 4; i++) {


        $('.good_xin').eq(i).click(function () {
            if ($('.good_xin img').eq(i).attr('src') == 'images/xin2.png') {
                $('.good_xin img').eq(i).attr('src', 'images/xin.png');
            } else {
                $('.good_xin img').eq(i).attr('src', 'images/xin2.png');
            }

        })
    }
})



//倒计时

$(function () {
    var m = 31;
    var s = 47;
    var h = 52
    setInterval(function () {
        if (s < 10) {
            //如果秒数少于10在前面加上0
            $('.s_rand').html( '距结束'+h+':'+m+':0'+ s + '');
        } else {
            $('.s_rand').html('距结束'+h+':'+m+':'+ s + '');
        }
        s--;
        if (s < 0) {
            //如果秒数少于0就变成59秒
            s = 59;
            m--;
        }
        if (m < 0) {
            //如果秒数少于0就变成59秒
            m = 59;
            h--;
        }
    }, 1000)
})




// 搜索栏


