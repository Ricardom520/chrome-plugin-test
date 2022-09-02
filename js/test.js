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
        return `<canvas id='yylive_bear'></canvas>`
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
      this.canvasRender()
    },

    // canvas画布
    canvasRender: function() {
      var gradientYellow = [
        {
          pro: 0,
          color: '#FFE652'
        },
        {
          pro: 1,
          color: '#FCD21C'
        }
      ]

      // canvas画布
      var canvas = document.getElementById('yylive_bear')
      var ctx = canvas.getContext('2d')

      canvas.addEventListener('click', () => {
        console.log('点击了')
        // parent.postMessage({
        //   val: 'chrome插件测试'
        // }, 'https://www.yy.com')
        // window.location.href = 'https://www.yy.com/u/54552'
      })

      // 画脸
      bearFace()
      function bearFace() {
        ctx.save()
        ctx.beginPath()
        ctx.moveTo(20, 115)
        ctx.bezierCurveTo(35, 140, 115, 140, 130, 115)

        ctx.bezierCurveTo(130, 115, 155, 80, 90, 45)
        ctx.bezierCurveTo(130, 160, 160, 20, 100, 52)
        ctx.bezierCurveTo(100, 52, 95, 48, 90, 45)
        
        ctx.bezierCurveTo(88, 45, 95, 28, 70, 45)
        ctx.bezierCurveTo(70, 45, 65, 48, 62, 50)
        
        ctx.bezierCurveTo(62, 50, 20, 20, 25, 78)
        ctx.bezierCurveTo(25, 78, 50, 60, 70, 45)
        
        ctx.bezierCurveTo(70, 45, 0, 75, 20, 115)
        fillGradientColor(ctx, 20, 115, 135, 135, gradientYellow)
        ctx.closePath()
        ctx.restore()
      }

      // 左耳
      leftEar()
      function leftEar() {
        ctx.save()
        ctx.beginPath()
        ctx.moveTo(52, 55)
        ctx.bezierCurveTo(52, 55, 30, 40, 35, 68)
        fillColor(ctx, '#8D4F1F')
        ctx.closePath()
        ctx.restore()
      }

      // 右耳
      rightEar()
      function rightEar() {
        ctx.save()
        ctx.beginPath()
        ctx.moveTo(125, 74)
        ctx.bezierCurveTo(125, 74, 130, 50, 110, 58)
        fillColor(ctx, '#8D4F1F')
        ctx.closePath()
        ctx.restore()
      }

      // 熊猫眼
      eyeBgColor()
      function eyeBgColor() {
        ctx.save()
        ctx.beginPath()
        ctx.moveTo(78, 80)
        ctx.bezierCurveTo(70, 55, 40, 65, 35, 95)
        ctx.bezierCurveTo(35, 95, 30, 122, 60, 110)
        ctx.bezierCurveTo(60, 110, 80, 95, 100, 110)
        ctx.bezierCurveTo(100, 110, 125, 125, 122, 96)
        ctx.bezierCurveTo(122, 90, 106, 45, 87, 80)
        ctx.bezierCurveTo(87, 80, 84, 85, 78, 80)
        ctx.closePath()
        fillColor(ctx, '#8D4F1F')
        ctx.restore()
      }

      // 左眼
      leftEye()
      function leftEye() {
        ellipseOne(ctx, 60, 88, 10, 13, '#FFF')
        ellipseOne(ctx, 61, 88, 8, 10, '#8D4F1F')
        ellipseOne(ctx, 64, 85, 3, 4, '#fff')
      }

      // 右眼
      rightEye()
      function rightEye() {
        ellipseOne(ctx, 102, 89, 10, 13, '#FFF')
        ellipseOne(ctx, 102, 89, 8, 10, '#8D4F1F')
        ellipseOne(ctx, 104, 87, 3, 4, '#fff')
      }

      // 鼻子
      mouse()
      function mouse() {
        ctx.save()
        ctx.moveTo(74, 114)
        ctx.beginPath()
        ctx.bezierCurveTo(74, 114, 80, 124, 88, 114)
        ctx.closePath()
        fillColor(ctx, '#8D4F1F')
        ctx.restore()
      }
      
      // 填充过渡颜色
      function fillGradientColor(context, x, y, r1, r2, options) {
        var gradient = context.createLinearGradient(x, y, r1, r2)
        for (var i = 0; i < options.length; i++) {
          gradient.addColorStop(options[i].pro, options[i].color)
        }

        context.fillStyle = gradient
        context.fill()
      }

      // 一个椭圆
      function ellipseOne(context , x, y, a, b, color) {
        var step = (a > b) ? 1 / a : 1 / b
        context.beginPath()
        context.moveTo(x + a, y)
        for(var i = 0; i < 2 * Math.PI; i += step) {
            context.lineTo(x + a * Math.cos(i), y + b * Math.sin(i))
        }
        context.closePath()
        fillColor(context, color)
      }

      // 填充颜色
      function fillColor(context, val) {
        context.fillStyle = val
        context.fill()
      }
    }
  }

  return obj
})()

window.onload = function() {
  new YYLiveBear()
}
