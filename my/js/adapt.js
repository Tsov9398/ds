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



// $(document).ready(function () {
//     $(window).bind('scroll', function () {
//         if ($(window).scrollTop() >= 0) {
//             $('.all_footer').addClass('fixed');
//         }
//         else {
//             console.log($(window).height())
//             console.log($(window).scrollTop())
//             $('.all_footer').removeClass('fixed');
//         }
//     });
// });