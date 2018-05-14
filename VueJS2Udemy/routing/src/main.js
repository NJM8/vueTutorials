import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import { routes } from './routes'

Vue.use(VueRouter);

const router = new VueRouter({
  // history mode prevents the routes from being parsed on the server, the server will always serve the index.html and let the page handle the rest of the route, this is a way to have a nicer looking url, however this need to be setup correctly on the backend, the webpack vue cli does this for us.
  mode: 'history',
  routes: routes,
  scrollBehavior(to, from, savedPosition){
    if (savedPosition) {
      return savedPosition;
    }
    if (to.hash) {
      return { selector: to.hash };
    }
    return {x: 0, y: 0}
  }
});
// this is like middleware that will run before each route is visited, can be used for authentication 
router.beforeEach((to, from, next) => {
  console.log('beforeEach');
  // you must call next for the path to be allowed to continue, you can also supply next(false) to stay on the page, or a specific route like next('/)
  next();
});

new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
})
