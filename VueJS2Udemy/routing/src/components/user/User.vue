<template>
  <div>
    <h1>The User Page</h1>
    <p>User id: {{ id }}</p>
    <hr>
    <button class="btn ptn-primary" @click="navigateHome">Back to Home</button>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        id: this.$route.params.id
      }
    },
    methods: {
      navigateHome(){
        this.$router.push('/');
      }
    }
  }
</script>
