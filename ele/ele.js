window.onload = function() {
    // 点击事件更改侧边框状态
    document.getElementsByClassName('sideBar-shop')[0].onclick = function() {
      var target = document.getElementsByClassName('sideBar')[0];
      if (target.classList.contains("sideBar-show")) {
        target.classList.remove("sideBar-show");
        target.classList.add("sideBar-hide");
      } else if (target.classList.contains("sideBar-hide")) {
        target.classList.remove("sideBar-hide");
        target.classList.add("sideBar-show");
      } else {
        target.classList.add("sideBar-show");
      }
    }
    // 计算可现实区域大小更改浮层左右展示
    
}
