<template>
  <div>
    <h1>The User Page</h1>
    <hr>
    <button class="btn ptn-primary" @click="navigateHome">Back to Home</button>
  </div>
</template>

<script>
  export default {
    methods: {
      navigateHome(){
        this.$router.push('/');
      }
    }
  }
</script>
