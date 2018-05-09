import Vue from 'vue'
import App from './App.vue'
// a global filter available anywhere
Vue.filter('to-lowercase', function(value){
  return value.toLowerCase();
}) 
// global mixins are added to all components and files. not generally a good idea
Vue.mixin({
  created(){
    console.log('Created by global mixin');
  }
})

new Vue({
  el: '#app',
  render: h => h(App)
})
