import Vue from 'vue'
import App from './App.vue'

import router from './router'
import store from './store'

import axios from 'axios';

axios.defaults.baseURL = 'https://learningaxios.firebaseio.com';
axios.defaults.headers.common['authorization'] = 'superSecretKey';
axios.defaults.headers.get['Accepts'] = 'application/json';
const reqInterceptor = axios.interceptors.request.use(config => {
  console.log('request');
  console.log(config);
  return config;
});

const resInterceptor = axios.interceptors.response.use(res => {
  console.log('response:');
  console.log(res);
  return res;
})

axios.interceptors.request.eject(reqInterceptor)
axios.interceptors.response.eject(resInterceptor)

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
