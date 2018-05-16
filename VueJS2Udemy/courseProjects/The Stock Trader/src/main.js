import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import { store } from './store/store'
import { routes } from './router/routes'

Vue.use(VueRouter);

const router = new VueRouter({
  routes: routes,
})

new Vue({
  el: '#app',
  store: store,
  router: router,
  render: h => h(App)
})
