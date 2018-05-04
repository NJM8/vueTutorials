Vue.component('hello', {
  template: `<p>Hello from component</p>`
})


const app1 = new Vue({
  data: {
    title: 'The First VueJS Instance',
    showParagraph: false
  },
  methods: {
    show: function() {
      this.showParagraph = true;
      this.updateTitle('The First VueJS Instance (Updated)');
      this.$refs.myButton.textContent = 'test';
    },
    updateTitle: function(title) {
      this.title = title;
    }
  },
  computed: {
    lowercaseTitle: function() {
      return this.title.toLowerCase();
    }
  },
  watch: {
    title: function(value) {
      alert('Title changed on first instance, new value: ' + value);
    }
  }
});

const app2 = new Vue({
  el: '#app2',
  data: {
    title: 'The Second VueJS Instance',
    showParagraph: false
  },
  methods: {
    show: function() {
      this.showParagraph = true;
      this.updateTitle('The Second VueJS Instance (Updated)');
    },
    updateTitle: function(title) {
      this.title = title;
    },
    changeOther: function(){
      app1.title = 'Hey don\'t do that!';
    }
  },
  computed: {
    lowercaseTitle: function() {
      return this.title.toLowerCase();
    }
  },
  watch: {
    title: function(value) {
      alert('Title changed on the second instance, new value: ' + value);
    }
  }
});

// here we can manually mount the app instance onto an element in the DOM, this does the same as the el property. very useful in the case of setting up your vue instance before knowing where you want to put it, or maybe the element hasn't been created yet.
app1.$mount('#app1');

let outside = document.querySelector('#outside');

outside.addEventListener('click', function(){
  setTimeout(function(){
    app1.title = 'Changed by outside!';
  }, 3000);
})

// When the new Vue object is instantiated, new will take the object we pass in and generate setters and getters for all our data, as well as make our methods, computed props, and watched values available as methods to use. Almost like adding them to the prototype of the Vue instance. so that being said, we can manually add our own properties to the Vue instance, but because it is being added after creation, there will be no getters and setters generated, Vue is not watching and managing this piece of data for us. Thus we will not be able to use it as we would normally use data in our Vue instance.
app1.newTitle = 'Hi There';
// review what is logged to see that newTitle does not have setters and getters.
console.log(app1);


// now to think about what happens if we change the value of an element that Vue has control of, we can over write the text, as you will see here Vue is going to set the text of the heading element, then we are changing it. but it is not reactive. Vue has a virtual dom it uses to parse changes before executing them to keep changes as minimal as possible, this means when you change it manually Vue doesn't know about it, so when you change it using Vue (click the button) your manual change will be overwritten.
app1.$refs.heading.childNodes[0].data = 'Ho There!';
// the below is what is used in the course, the above is what is needed to get it to work in firefox, not sure why this is: https://github.com/vuejs/vue/issues/7803
// app1.$refs.heading.innerText = 'Ho There!';

// example of using a template in the Vue instance to generate the 
const app3 = new Vue({
  template: `<p>Hello from app 3</p>`
})

app3.$mount('#app3');

const app4 = new Vue({
  el: '#app4',
  data: {
    title: 'Hello Vue!'
  },
  beforeCreate: function(){
    console.log('beforeCreate()');
  },
  created: function(){
    console.log('created()');
  },
  beforeMount: function(){
    console.log('beforeMount()');
  },
  mounted: function(){
    console.log('mounted()');
  },
  beforeUpdate: function(){
    console.log('beforeUpdate()');
  },
  updated: function(){
    console.log('updated()');
  },
  beforeDestroy: function(){
    console.log('beforeDestroy()');
  },
  destroyed: function(){
    console.log('destroyed()');
  },
  methods: {
    destroy: function(){
      this.$destroy();
    }
  }
})


