import '../../common/css/com.less';
import $ from 'jquery';
import menu from '../../images/button.png';
import logo from '../../images/logo-m.png';
import home from '../../images/home-m.png';
import children from '../../images/children-m.png';
import app from '../../images/app-m.png';
import about from '../../images/about-m.png';

window.$ = $
window.jQuery = $

function IsApp () {
  var userAgent = navigator.userAgent;
  var Agents = ['Android', 'iPhone', 'SymbianOS', 'Windows Phone', 'iPad', 'iPod'];
  return Agents.some((i) => {
    return userAgent.includes(i)
  })
}

$(document).ready(function () {
  var isApp = IsApp();
  var homeContent = '<div class="imgContent"><img id="home" src="' + home + '" alt="home"><img id="children" src="' + children + '" alt="children"><img id="app" src="' + app + '" alt="app"><img id="about" src="' + about + '" alt="about"></div>';
  var menuContent = '<div class="nav" style="display:none;"><ul><li name="首页"><a href="#home">首页</a></li><li name="儿童个护"><a href="#children">儿童个护</a></li><li name="稚造APP"><a href="#app">稚造APP</a></li><li name="关于我们"><a href="#about">关于我们</a></li></ul></div>';
  if (isApp) {
    document.title = 'CreamPlay';
    $('.header').html('<img class="menu" src="' + menu + '" alt="home"><img class="logo" src="' + logo + '" alt="home">');
    $('.content').html(menuContent + homeContent);
  }
  $('.menu').click(function () {
    $('.nav').show();
    $('.imgContent').hide();
  });
  $('.nav li').click(function () {
    $('.nav').hide();
    // document.title = $(this).attr('name');
    $('.imgContent').show();
  });
});
