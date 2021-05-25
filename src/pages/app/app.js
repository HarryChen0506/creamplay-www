import '../../common/css/com.less';
import $ from 'jquery';

window.$ = $
window.jQuery = $

function IsApp () {
  var userAgent = navigator.userAgent;
  var Agents = ['Android', 'iPhone', 'SymbianOS', 'Windows Phone', 'iPad', 'iPod'];
  return Agents.some((i) => {
    return userAgent.includes(i)
  })
}

function dealApp () {
  var homeContent = '<div class="imgContent"><img id="home" src="https://creamplay.oss-cn-hangzhou.aliyuncs.com/www/images/home-m.png" alt="home" /><img id="children" src="https://creamplay.oss-cn-hangzhou.aliyuncs.com/www/images/children-m.png" alt="children" /><img id="app" src="https://creamplay.oss-cn-hangzhou.aliyuncs.com/www/images/app-m.png" alt="app"><img id="about" src="https://creamplay.oss-cn-hangzhou.aliyuncs.com/www/images/about-m.png" alt="about" />' +
    '<div class="footer">' +
    '<div class="footer-border"></div>' +
    '<div class="copyright">Copyright © 2021 Creamplay 保留所有权利。</div>' +
    '<div class="hrefs">' +
    '<a href="https://beian.miit.gov.cn/#/Integrated/index">沪ICP备2021000596号-1</a> ｜ <img src="https://creamplay.oss-cn-hangzhou.aliyuncs.com/www/images/police.png" alt="">' +
    '<a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=31011002005418">沪公安网备31011002005418号</a>' +
    '</div></div>' +
    '</div>';
  var menuContent = '<div class="nav hide"><ul><li name="首页"><a href="#home">首页</a></li><li name="儿童个护"><a href="#children">儿童个护</a></li><li name="稚造APP"><a href="#app">稚造APP</a></li><li name="关于我们"><a href="#about">关于我们</a></li></ul></div>';
  document.title = 'CreamPlay';
  $('.header').html('<img class="menu" src="https://creamplay.oss-cn-hangzhou.aliyuncs.com/www/images/button.png" alt="home" /><img class="logo" src="https://creamplay.oss-cn-hangzhou.aliyuncs.com/www/images/logo-m.png" alt="logo" />');
  $('.main').addClass('app');
  $('.content').html(menuContent + homeContent);
  $('.menu').click(function () {
    if ($('.nav').hasClass('show')) {
      $('.nav').removeClass('show').addClass('hide');
      $('.imgContent').removeClass('hide').addClass('show');
    } else {
      $('.nav').removeClass('hide').addClass('show');
      $('.imgContent').removeClass('show').addClass('hide');
    }
  });
  $('.nav li').click(function () {
    $('.nav').removeClass('show').addClass('hide');
    // document.title = $(this).attr('name');
    $('.imgContent').removeClass('hide').addClass('show');
  });
}
function dealWeb () {
  var headerContent = '<img src="https://creamplay.oss-cn-hangzhou.aliyuncs.com/www/images/logo@2x.png" alt="logo" class="logo" />' +
    '<div class="tab">' +
    '<div class="home">' +
    '<a href="./">首页</a><img src="https://creamplay.oss-cn-hangzhou.aliyuncs.com/www/images/tab-selected.png" alt="selected" />' +
    '</div>' +
    '<div class="children">' +
    '<a href="./children.html">儿童个护</a><img src="https://creamplay.oss-cn-hangzhou.aliyuncs.com/www/images/tab-selected.png" alt="selected" />' +
    '</div>' +
    '<div class="app selected">' +
    '<a href="#">稚造APP</a><img src="https://creamplay.oss-cn-hangzhou.aliyuncs.com/www/images/tab-selected.png" alt="selected" />' +
    '</div>' +
    '<div class="about">' +
    '<a href="./about.html">关于我们</a><img src="https://creamplay.oss-cn-hangzhou.aliyuncs.com/www/images/tab-selected.png" alt="selected" />' +
    '</div>' +
    '</div>';
  var content = '<img src="https://creamplay.oss-cn-hangzhou.aliyuncs.com/www/images/app.png" alt="app" />' +
    '<div class="footer">' +
    '<div class="footer-border"></div>' +
    '<div class="copyright">Copyright © 2021 Creamplay 保留所有权利。</div>' +
    '<div class="hrefs">' +
    '<a href="https://beian.miit.gov.cn/#/Integrated/index">沪ICP备2021000596号-1</a> ｜ <img src="https://creamplay.oss-cn-hangzhou.aliyuncs.com/www/images/police.png" alt="">' +
    '<a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=31011002005418">沪公安网备31011002005418号</a>' +
    '</div></div>';
  $('.main').removeClass('app');
  $('.header').html(headerContent);
  $('.content').html(content);
}

$(document).ready(function () {
  $(window).resize(function () {
    var width = $(window).width();
    if (width < 768) {
      dealApp();
    } else {
      dealWeb()
    }
  });
  var isApp = IsApp();
  var width = $(window).width();
  if (isApp || width < 768) {
    dealApp()
  } else {
    dealWeb()
  }
});
