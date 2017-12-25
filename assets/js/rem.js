/**
 * 移动端适配(640px设计稿)
 */
function rem () {
  var clientWidth = document.documentElement.clientWidth
  if (clientWidth > 640) clientWidth = 640
  document.documentElement.style.fontSize = clientWidth / 6.4 + 'px'
  document.documentElement.style.width = '100%'
}

var resize = 'orientationchange' in window ? 'orientationchange' : 'resize'

document.addEventListener(resize, rem, false)
window.addEventListener('DOMContentLoaded', rem, false)
