setRem();

        function setRem() {


            var ui_w = 750;
            //默认宽度750px
            var clienWidth = document.documentElement.clientWidth || document.body.clientWidth;

            var html_w = document.getElementsByTagName('html')[0];
            html_w.style.fontSize = (clienWidth / ui_w) * 100 + 'px';
            console.log(clienWidth / ui_w);
        }

        window.onresize = setRem;
//自适应结束

//底部点击跳转
$(function(){
    $('.home').click(function(){
        window.location.href="../home/index.html";
    })
});
$(function(){
    $('.unuse').click(function(){
        window.location.href="../unuse/index.html";
    })
});
$(function(){
    $('.my').click(function(){
        window.location.href="../my/index.html";
    })
});



