// 图片查看器 组件
<template>
  <div>
    <ul id="images" style="display:none">
      <li v-for="(item,index) in list" :key="index"><img :src="item.url"></li>
    </ul>
  </div>
</template>
<script>
import 'viewerjs/dist/viewer.min.css'
import Viewer from 'viewerjs'
export default {
  name: 'vue-pic-view',
  props: {
    list: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  methods: {
    // 展示之前 进行赋值
    show (config,index) {
      let _this = this
      this.$nextTick(() => {
        const apper = config.hidden
        var promis = function () {
          apper ? apper() : ''
          window.viewer.destroy() // 销毁
        }
        config.hidden = promis
        window.viewer = new Viewer(document.getElementById('images'), config)
        if (index) {
          window.viewer.view(index)
        } else {
          window.viewer.view(0)
        }
      })
    },
    addPre () {
    }
  }

}
</script>

