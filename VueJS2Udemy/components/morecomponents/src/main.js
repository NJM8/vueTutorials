import Vue from 'vue'
import App from './App.vue'
import Home from './Home.vue'
// importing and registering the global component
Vue.component('app-servers', Home)

new Vue({
  el: '#app',
  render: h => h(App)
})
