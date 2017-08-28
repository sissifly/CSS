(function() {

  // 点击事件更改侧边框状态
  $('.sideBar-shop.icon-sidebar-shop').on('click', function(e) {
    var $target = $('.sideBar');
    if (!$target.hasClass('sideBar-show') && !$target.hasClass('sideBar-hide')) {
      $target.toggleClass("sideBar-show");
    } else {
      $target.toggleClass("sideBar-hide");
      $target.toggleClass("sideBar-show");
    }
  });

  // 侧边栏hover事件
  $('.layer-tip').hover(function(e) {
    // 计算可视区的大小
    var $target = $(e.currentTarget).next(),
      rect = e.currentTarget.getBoundingClientRect(),
      minDistance = '80';
    if (rect.left < minDistance) {
      $target.addClass('layer-tip-right').show();
    } else {
      $target.addClass('layer-tip-left').show();
    }
  }, function(e) {
    var $target = $(e.currentTarget).next();
    $target.hide().removeClass('layer-tip-right');
    $target.hide().removeClass('layer-tip-left');
  });

  // 侧边栏二维码hover事件
  $('.sideBar-qr-code').hover(function () {
    $('.layer-tip-qr-code').show();
  },function () {
    $('.layer-tip-qr-code').hide();
  });

  // 回到顶部
  // 节流
  var throttle = function(fn,time){
      var last = -Infinity;
      return function () { //执行多次
          var now = Date.now();
          if (now - last >= time) {
              fn();
              last = now;
          }
      }
  }
  // 防反跳
  var handle = function () {
    // 获取滚动距离
    console.log('12');
    console.log($(document).scrollTop());
    if ($(document).scrollTop() > 0){
        console.log('show');
        $('.back-top-box').show();
    } else {
        console.log('hide');
        $('.back-top-box').hide();
    }
  }
  var time = 500;
  $(window).scroll(throttle(handle,time))


})();
