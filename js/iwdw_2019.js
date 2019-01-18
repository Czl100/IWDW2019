$(document).ready(function(){
    //导航栏
    var navbox='<div class="nav" id="smoothmenu1">\
            <ul class="clearfix">\
                <li class="selected home"><a href="index.html"><span>Home</span></a></li>\
                <li class="program">\
                    <a  href="#"><span>Program</span></a>\
                    <ul class="submenu">\
                        <li><a href="keynote.html">Keynote speakers</a></li>\
                        <li><a href="program.html">Program</a></li>\
                    </ul>\
                </li>\
                <li class="cfp">\
                    <a  href="#"><span>CFP</span></a>\
                    <ul class="submenu">\
                        <li><a href="callPaper.html">Call for papers</a></li>\
                        <li><a href="submission.html">Submission of papers</a></li>\
                        <li><a href="paperRe.html">Paper Review</a></li>\
                    </ul>\
                </li>\
                <li class="committees">\
                    <a  href="Committee.html"><span>Committees</span></a>\
                </li>\
                <li class="location">\
                    <a  href="#"><span>Location</span></a>\
                    <ul class="submenu">\
                        <li><a href="venueIn.html">Venue Information</a></li>\
                        <li><a href="accormado.html">Accommodation</a></li>\
                        <li><a href="transpor.html">Transportation</a></li>\
                        <li><a href="sight.html">Sightseeing</a></li>\
                    </ul>\
                </li>\
                <li class="registration">\
                    <a  href="regist.html"><span>Registration</span></a>\
                </li>\
            </ul>\
        </div>';

    //<!--图像集-->    
    var theme_title='<div class="logo">\
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
        </div>';
    var footer='<p>Copyright(c) IWDW 2019 Conference committees. All rights reserved.</p>';
    $('.navbox').html(navbox);
    $('.theme-title').html(theme_title);
    $('footer').html(footer);


    //导航栏
    var elid = $('body').attr('id') || 'home';
    elid = '.' + elid;
    $('.clearfix').children('.selected').removeClass('selected');    
    $('.clearfix').children(elid).addClass('selected');

    //风景照链接
    $(".slider").click(function(){
        window.location.href="sight.html";
    });    
});