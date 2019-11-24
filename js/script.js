$(function () {
  $('#carousel').carousel({
    interval: false
//    keyboard: false,
//    pause: 'hover',
//    ride: 'carousel',
//    wrap: false
  });
});

//var isIE = '-ms-scroll-limit' in document.documentElement.style && '-ms-ime-align' in document.documentElement.style;
// 

//var isIE = window.navigator.msPointerEnabled;

var isIE = document.body.style.msTouchAction !== undefined;