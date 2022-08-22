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

      var temp = function() {
        return `<canvas id='yylive_bear' width='100%' height='100%'></canvas>`
      }
      console.log(document)
      dom.appendChild(this.createFrag(temp()))
      document.body.appendChild(dom)

      this.render()
    },

    createFrag: function(temp) {
      return document.createRange().createContextualFragment(temp)
    },

    // html内容
    render: function() {
      // canvas画布
      var canvas = document.getElementById('yylive_bear')
      var ctx = canvas.getContext('2d')

      // 一个圆
      ctx.beginPath()
      ctx.arc(0, 0, 50, 0, 2 * Math.PI)
      ctx.stroke()


    }
  }

  return obj
})()

window.onload = function() {
  new YYLiveBear()
}
