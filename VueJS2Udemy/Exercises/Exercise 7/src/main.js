import Vue from 'vue'
import App from './App.vue'

export const eventBus = new Vue({
  methods: {
    showServer(id, status){
      this.$emit('showServer', {'id': id, 'status': status});
    }
  }
})

new Vue({
  el: '#app',
  render: h => h(App)
})

// todo:
// when clicking server load it into the servers details file
// provide button to set the status of the server from server details
// make sure data propagates up to main view
