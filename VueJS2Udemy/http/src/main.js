import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App.vue'

Vue.use(VueResource);
// optional way to direct all requests to this route, then whatever is on the reqest will be appended
Vue.http.options.root = "https://httpwithvueresource.firebaseio.com/data.json";

new Vue({
  el: '#app',
  render: h => h(App)
})
