# picview

> A picture view  use vue base on viewerjs 
> 一个vue组件 基于 viewerjs的图片查看器
## Build Setup

``` bash
# install the package
npm i vue-viewjs

# in the main.js import the package
 ## 全局引用
import {globalcom} from 'vue-viewjs'
Vue.use(globalcom)

 ## 局部引用
 import {partial} from 'vue-viewjs' 
# use the components
  <picview ref="picviewer" :list="list" />
  # in the data 
   list: [{
        url: 'http://img.zcool.cn/community/0117e2571b8b246ac72538120dd8a4.jpg@1280w_1l_2o_100sh.jpg'
      }, {
        url: 'http://img.zcool.cn/community/0117e2571b8b246ac72538120dd8a4.jpg@1280w_1l_2o_100sh.jpg'
      }
      ]
      var config = {
        button: false, // 顶部关闭按钮
        // navbar: true, // 底部图片缩略图 默认true
        title: false, // 图片标题
        toolbar: {
          // zoomIn: true,
          // zoomOut: true,
          // oneToOne: false,
          // reset: true,
          // prev: true,
          // play: {
          //   show: true,
          //   size: 'large'
          // },
          // next: true,
          // rotateLeft: true,
          // rotateRight: true,
          // flipHorizontal: false,
          // flipVertical: false
        },
        tooltip: true,
        hidden: () => {
          console.log(0)
        },
        show: () => {
          this.showicon()
        }
      }
    # use the show methods to show the picture view
    this.$refs.picviewer.show(config)
```

