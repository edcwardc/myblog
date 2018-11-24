//点击划掉字体样式
$(function() {　　
    $(".menu-item").click(function() {
        $('.menu-item').removeClass('active');　　　　
        $(this).addClass('active');　　
    });
})

//点击下拉样式
$(function() {　　
    $(".dropdown").click(function() {　　　　 $(this).toggleClass('active');　　 });
})