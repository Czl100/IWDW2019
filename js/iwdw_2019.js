$(document).ready(function(){
    //<!--图像集-->    
    var theme_title='<div class="theme-title">\
        <div class="logo">\
            <a href="index.html"><img src="images/logo.png" /></a>\
        </div>\
        <div class="slider">\
            <div class="conbox">\
                <div><img src="images/4ffecc68cb780d1801f19db52d38cabd.jpg"/></div>\
                <div><img src="images/9fae30738c94fb8e47dd2ba3e6003290.jpg" /></div>\
                <div><img src="images/44b91d75de385dc1a70fe56600f41e52.jpg" /></div>\
                <div><img src="images/85dc407af2b2f7bfbbcb025a0ee0d66e.jpg" /></div>\
            </div>\
            <div class="switcher">\
                <a href="#" class="cur">1</a>\
                <a href="#">2</a>\
                <a href="#">3</a>\
                <a href="#">4</a>\
            </div>\
        </div>\
        </div>'
    $('.theme-title').html(theme_title);







    //导航栏
    var elid = '.' + $('body').attr('id');
    $('.clearfix').children('.selected').removeClass('selected');    
    $('.clearfix').children(elid).addClass('selected');

    //风景照链接
    $(".slider").click(function(){
        window.location.href="sight.html";
    });    
});