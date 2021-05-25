import '../../common/css/com.less';
import $ from 'jquery';
import menuM from '../../images/button.png';
import selected from '../../images/tab-selected.png';
import logo from '../../images/logo@2x.png';
import app from '../../images/app.png';
import logoM from '../../images/logo-m.png';
import homeM from '../../images/home-m.png';
import childrenM from '../../images/children-m.png';
import appM from '../../images/app-m.png';
import aboutM from '../../images/about-m.png';
import police from '../../images/police.png';

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
  var homeContent = '<div class="imgContent"><img id="home" src="' + homeM + '" alt="home" /><img id="children" src="' + childrenM + '" alt="children" /><img id="app" src="' + appM + '" alt="app"><img id="about" src="' + aboutM + '" alt="about" />' +
    '<div class="footer">' +
    '<div class="footer-border"></div>' +
    '<div class="copyright">Copyright © 2021 Creamplay 保留所有权利。</div>' +
    '<div class="hrefs">' +
    '<a href="https://beian.miit.gov.cn/#/Integrated/index">沪ICP备2021000596号-1</a> ｜ <img src="' + police + '" alt="">' +
    '<a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=31011002005418">沪公安网备31011002005418号</a>' +
    '</div></div>' +
    '</div>';
  var menuContent = '<div class="nav hide"><ul><li name="首页"><a href="#home">首页</a></li><li name="儿童个护"><a href="#children">儿童个护</a></li><li name="稚造APP"><a href="#app">稚造APP</a></li><li name="关于我们"><a href="#about">关于我们</a></li></ul></div>';
  document.title = 'CreamPlay';
  $('.header').html('<img class="menu" src="' + menuM + '" alt="home" /><img class="logo" src="' + logoM + '" alt="logo" />');
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
  var headerContent = '<img src="' + logo + '" alt="logo" class="logo" />' +
    '<div class="tab">' +
    '<div class="home">' +
    '<a href="./">首页</a><img src="' + selected + '" alt="selected" />' +
    '</div>' +
    '<div class="children">' +
    '<a href="./children.html">儿童个护</a><img src="' + selected + '" alt="selected" />' +
    '</div>' +
    '<div class="app selected">' +
    '<a href="#">稚造APP</a><img src="' + selected + '" alt="selected" />' +
    '</div>' +
    '<div class="about">' +
    '<a href="./about.html">关于我们</a><img src="' + selected + '" alt="selected" />' +
    '</div>' +
    '</div>';
  var content = '<img src="' + app + '" alt="app" />' +
    '<div class="footer">' +
    '<div class="footer-border"></div>' +
    '<div class="copyright">Copyright © 2021 Creamplay 保留所有权利。</div>' +
    '<div class="hrefs">' +
    '<a href="https://beian.miit.gov.cn/#/Integrated/index">沪ICP备2021000596号-1</a> ｜ <img src="' + police + '" alt="">' +
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
