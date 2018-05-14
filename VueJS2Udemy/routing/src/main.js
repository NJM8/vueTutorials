import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import { routes } from './routes'

Vue.use(VueRouter);

const router = new VueRouter({
  // history mode prevents the routes from being parsed on the server, the server will always serve the index.html and let the page handle the rest of the route, this is a way to have a nicer looking url, however this need to be setup correclty on the backend, the webpack vue cli does this for us.
  mode: 'history',
  routes: routes
})

new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
})