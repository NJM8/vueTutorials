<template>
  <div>
    <h3>New Quote</h3>
    <button @click="counter++">Add One</button>
    <p>{{ counter }}</p>
  </div>
</template>

<script>
  export default {
    data: function(){
      return {
        counter: 0
      }
    },
    destroyed(){
      console.log('New was destroyed');
    }, 
    // if you still want to dynamically change content when moving between components you can actived and deactivated life cycle hooks
    activated(){
      console.log('New was activated');
    },
    deactivated(){
      console.log('New was deactivated');
    }
  }
</script>

<style>

</style>

