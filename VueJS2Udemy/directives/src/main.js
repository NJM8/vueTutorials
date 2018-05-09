import Vue from 'vue'
import App from './App.vue'

// hooks for directives:
// bind(el, binding, vnode): fired once directive is attached
// inserted(el, binding, vnode): fired when element is inserted into the dom
// update(el, binding, vnode, oldVnode): called once component is updated without children
// componentUpdated(el, binding, vnode, oldVnode): called once component is updated with children
// unbind(el, binding, vnode): fires once directive is removed

Vue.directive('highlight', {
  bind(el, binding){
    // el.style.backgroundColor = '#42b883'
    // el.style.backgroundColor = binding.value;
    if (binding.arg === 'background'){
      el.style.backgroundColor = binding.value;
    } else {
      el.style.color = binding.value;
    }
  }
})

new Vue({
  el: '#app',
  render: h => h(App)
})
