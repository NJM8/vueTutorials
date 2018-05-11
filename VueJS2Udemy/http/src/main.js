import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App.vue'

Vue.use(VueResource);
// optional way to direct all requests to this route, then whatever is on the reqest will be appended
Vue.http.options.root = "https://httpwithvueresource.firebaseio.com/";
// here is how we can intercept requests, note that on firebase put will overwrite the data at the url
Vue.http.interceptors.push((request, next) => {
  if (request.method === 'POST') {
    request.method = 'PUT';
  }
  // this also lets us intercept the response object through the next function
  next(response => {
    // note it is not recommended to do this in production as this will overwrite the json function in your whole app, this is just an example of how to work with the response interceptor
    response.json = () => { return { message: response.body } }
  })
})

new Vue({
  el: '#app',
  render: h => h(App)
})
