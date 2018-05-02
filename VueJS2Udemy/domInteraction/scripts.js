const app = new Vue({
  el: '#app',
  data: {
    title: 'Hello world!',
    link: 'http://google.com',
    finishedLink: '<a href="https://google.com">Google</a>'
  },
  methods: {
    sayHello: function(){
      // return 'Hello!';
      this.title = 'Hey there'; // updating the value of title before sending it to the DOM, all rendered data is updated when it changes
      // can also do the style below, Vue instance proxies the data to "this", so we can access our data using "this"
      return this.title;
    }
  }
})

const events = new Vue({
  el: '#events',
  data: {
    counter: 0,
    x: 0,
    y: 0
  }, 
  methods: {
    incrementCounter: function(step){
      this.counter += step;
    },
    // we can pass in the event from v-on, behind the scene Vue passes the event back to the function specified in our event handler
    updateCoordinates: function(event){
      this.x = event.clientX;
      this.y = event.clientY;
    },
    alertMe: function(){
      alert('Alert!');
    }
  }
})

const twoWay = new Vue({
  el: '#twoWay',
  data: {
    name: 'Nate'
  }
})