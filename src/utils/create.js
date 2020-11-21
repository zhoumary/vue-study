import Vue from 'vue'

// 提供一个函数：能够动态创建传入组件实例，并且挂载到body
export default function create(Component, props) {

  // 创建组件实例：
  // 1.Vue.extend()
  // 2.new Vue()
  const vm = new Vue({
    render(h) {
      return h(Component, {props})
    }
  }).$mount() // 不传宿主，vdom =》 dom

  // 手动追加
  document.body.appendChild(vm.$el)

  // 获取根组件实例
  const comp = vm.$children[0]

  // 淘汰方法
  comp.remove = () => {
    document.body.removeChild(vm.$el)
    vm.$destroy()
  }

  return comp
}