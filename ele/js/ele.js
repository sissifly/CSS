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
  var throttle = function(callBack,time){
    setTimeout(function () {
      console.log('1');
      var lastTime = -Infinity;
      return function () {
        var currentTime = Date.now();
        if (currentTime - lastTime >= time ){
          callBack();
          lastTime = currentTime;
        }
      }
    },time)
  }
  var scrollEvent = function () {
    $(window).scroll(function () {
      console.log('e');
    });
  }
  var time = 1;
  throttle(scrollEvent,1);

})();
