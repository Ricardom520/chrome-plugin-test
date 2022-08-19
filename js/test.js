var YYLiveBear = (function() {
  var obj = function() {
    this.init()
  }

  obj.prototype = {
    constructor: obj,

    // 入口函数
    init: function () {
      // 创建全局dom 
      var dom = document.createElement('div')
      dom.id = 'yybear_pop'
      console.log(document)
      document.body.appendChild(dom)
    }
  }

  return obj
})()

window.onload = function() {
  new YYLiveBear()
}
