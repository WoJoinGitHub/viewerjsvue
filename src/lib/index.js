import partial from './picview.vue'
const globalcom = {
  install: function(Vue) {
    Vue.component('picview', picview)
  },
}
// global 情况下 自动安装
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(globalcom)
}
// 导出模块 全局引用 和局部引用 
export { globalcom, partial }
// export const picview
