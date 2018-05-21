import Vue from 'vue'
import App from './App.vue'

import router from './router'
import store from './store'

import axios from 'axios';

axios.defaults.baseURL = 'https://learningaxios.firebaseio.com';
axios.defaults.headers.common['authorization'] = 'superSecretKey';
axios.defaults.headers.get['Accepts'] = 'application/json';

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
