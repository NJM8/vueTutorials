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
    }
  }
</script>

<style>

</style>

