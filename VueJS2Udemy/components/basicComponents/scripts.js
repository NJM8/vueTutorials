// this is a global component that can be used my any instance. to register a local component that can only be used by a certain instance see below
Vue.component('my-cmp', {
  // returning the data when registering a component is critical as it allows each component instance to track it's own copy of the data, otherwise they will all reference the same data. Vue will throw an error to prevent this but a cheat would be to pass a data object in from global to be returned. Then all instances will ref the same data object and changeStatus will change them all
  data: function(){
    return {
      status: 'Critical'
    }
  },
  template: `
  <div>
    <p>Server status: {{ status }}</p>
    <button @click="changeStatus">Change Status</button>
  </div>
  `,
  methods: {
    changeStatus: function(){
      this.status = 'Stable'
    }
  }
})

const myApp = new Vue({
  el: '#app'
})

// local component example

const localCMP = {
  data: function(){
    return {
      status: 'Local'
    }
  },
  template: `
  <div>
    <p>Server status: {{ status }}</p>
    <button @click="changeStatus">Change Status</button>
  </div>
  `,
  methods: {
    changeStatus: function(){
      this.status = 'Stable'
    }
  }
}

const myApp2 = new Vue({
  el: '#app2',
  components: {
    'my-local-cmp': localCMP
  }
})
