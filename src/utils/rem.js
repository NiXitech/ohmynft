// 基准大小
// const baseSize = 37.5
// 设置 rem 函数
// function setRem () {
//   // 当前页面宽度相对于 750 宽的缩放比例，可根据自己需要修改。
// //   const scale = document.documentElement.clientWidth / 750
//   // 设置页面根节点字体大小
// //   document.documentElement.style.fontSize = (baseSize * Math.min(scale, 1)) + 'px'
//   document.documentElement.style.fontSize = 16 + 'px'
// }
// // 初始化
// setRem()
// // 改变窗口大小时重新设置 rem
// window.onresize = function () {
//   setRem()
// }
 
// 基准大小
const baseSize = 16
// 设置 rem 函数
function setRem () {
  // 当前页面宽度相对于 1920 宽的缩放比例，可根据自己需要修改。
  const scale = document.documentElement.clientWidth / 1920
  // 设置页面根节点字体大小, 字体大小最小为12
  let fontSize = (baseSize * Math.min(scale, 2))>12 ? (baseSize * Math.min(scale, 2)): 12
  document.documentElement.style.fontSize = fontSize + 'px'
}
//初始化
setRem()
//改变窗口大小时重新设置 rem,这里最好加上节流
window.onresize = function () {
  setRem()
}



// function (n, e) { var t = n.documentElement, i = "orientationchange" in window ? "orientationchange" : "resize", o = function () { let size = 1920; const isMobile = navigator.userAgent.match(/(phone|pod|iPhone|iPod|ios|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i); if (isMobile) { size = 750 }; var n = t.clientWidth; n && (t.style.fontSize = n / size * 100 + "px") }; n.addEventListener && (e.addEventListener(i, o, !1), o()) }(document, window);
