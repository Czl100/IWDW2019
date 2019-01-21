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
            <a href="index.html"><img src="images/qcs.jpg" /></a>\
        </div>\
        <div class="slider">\
            <div class="conbox">\
                <div><img src="images/1.jpg"/></div>\
                <div><img src="images/2.jpg" /></div>\
                <div><img src="images/3.jpg" /></div>\
                <div><img src="images/xm1.jpg" /></div>\
            </div>\
            <div class="switcher">\
                <a href="#" class="cur">1</a>\
                <a href="#">2</a>\
                <a href="#">3</a>\
                <a href="#">4</a>\
            </div>\
        </div>';

    var sponsors='<div id="bottom">\
        <hr width="100%" noshade id="line-gray"/>\
        <div id="sponsor">\
            <table><tbody>\
                <tr>\
                    <td><a href="https://www.springer.com/gp"><img src="images/springer.png"/></a></td>\
                    <td><a href="http://www.scu.edu.cn/"><img src="images/scu.png" /></a></td>\
                </tr>\
            </tbody></table>\
        </div>\
        </div>';        

    var footer='<p>Copyright(c) IWDW 2019 Conference committees. All rights reserved.</p>';
    $('.navbox').html(navbox);
    $('.theme-title').html(theme_title);
    $('.sponsors').html(sponsors);
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