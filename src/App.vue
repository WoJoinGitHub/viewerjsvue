<template>
  <div>
    <button @click="show">展示图片</button>
    <picview ref="picviewer" :list="list" />
  </div>
</template>

<script>
// 局部引用引用
import { partial } from './lib/index'
export default {
  name: 'app',
  data () {
    return {
      list: []
    }
  },
  components: {
    'picview': partial
  },
  methods: {
    show () {
      this.list = [{
        url: 'http://pic5.photophoto.cn/20071228/0034034901778224_b.jpg'
      }, {
        url: 'http://pic5.photophoto.cn/20071228/0034034901778224_b.jpg'
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
      console.log(this.$refs.picviewer)
      this.$refs.picviewer.show(config)
    },
    showicon () {
      var dom = document.querySelector('.viewer-container')
      if (this.list.length > 1) {
        dom.insertAdjacentHTML('beforeend', '<a class="bh_pre bh_iconbutton" onclick="viewer.prev([loop=true])"><i class="iconfont icon-shangyige"></i></a>')
        dom.insertAdjacentHTML('beforeend', '<a class="bh_next bh_iconbutton" onclick="viewer.next([loop=true])"><i class="iconfont icon-xiayige"></i></a>')
      }
      // dom.insertAdjacentHTML('beforeend', '<div class="bh_add bh_iconbutton" onclick="viewer.prev([loop=true])"><i class="iconfont iconfont-plus-round"></i></div>')
      dom.insertAdjacentHTML('beforeend', `<div class="bottonContent">
       <a  onclick="viewer.zoom(0.1)"><i class="iconfont icon-jiahao"></i></a>
        <a  onclick="viewer.zoom(-0.1)"><i class="iconfont icon-jianhao"></i></a>
         <a class="range" onclick="viewer.rotate(90)"><i class="iconfont icon-yulanxuanzhuan"></i></a>
       </div>
     `)
    }
  },
  mounted () {

  }
}
</script>

<style  >
.bh_pre {
  top: 30%;
  left: 30%;
  /* padding-right: 5px; */
}
.bh_next {
  top: 30%;
  right: 30%;
  /* padding-left: 5px; */
}
.bottonContent {
  position: absolute;
  z-index: 3000;
  margin: 0 auto;
  left: 0;
  right: 0;
  top: 85.5%;
  text-align: center;
  font-size: 20px;
  font-weight: 700;
}
.bottonContent a {
  height: 48px;
  width: 48px;
  line-height: 43px;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  display: inline-block;
  color: #fff !important;
}
.range {
  padding-right: 4px;
}
.bh_iconbutton {
  position: absolute;
  z-index: 3000;
  height: 56px;
  width: 56px;
  font-size: 30px;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  text-align: center;
  line-height: 54px;
  color: #fff !important;
  font-size: 20px;
  font-weight: 700;
}
.viewer-container a:hover {
  background: rgba(0, 0, 0, 0.7) !important;
}
</style>