import Vue from 'vue'
import App from './App.vue'

export const eventBus = new Vue({
  methods: {
    showServer(id, status){
      this.$emit('showServer', { 'id': id, 'status': status });
    },
    changeStatus(id, status){
      this.$emit('updateStatus', {'id': id, 'status': status });
    }
  }
})

new Vue({
  el: '#app',
  render: h => h(App)
})
