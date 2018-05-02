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