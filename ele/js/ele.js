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

})();
