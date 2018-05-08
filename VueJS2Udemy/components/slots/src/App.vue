<template>
  <app-quote>
    <!-- this html will get passed to the app-quote for rendering using a slot, now you can set the data on the elements here -->
    <h2 slot="title">{{ title }}</h2>
    <p>A Quote</p>
  </app-quote>
</template>

<script>
import Quote from './components/Quote';

export default {
  data: function(){
    return {
      title: 'My Quotes'
    }
  },
  components: {
    'app-quote': Quote
  }
}
</script>

<style>
/* this apply but can be overwritten by the child */
h2 {
  color: firebrick;
}
</style>
