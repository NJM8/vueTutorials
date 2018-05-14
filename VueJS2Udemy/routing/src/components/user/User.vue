<template>
  <div>
    <h1>The User Page</h1>
    <hr>
    <button class="btn ptn-primary" @click="navigateHome">Back to Home</button>
    <hr>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    // data(){
    //   return {
    //     id: this.$route.params.id
    //   }
    // },
    // props: {
    //   id: String
    // },
    // watch: {
    //   '$route'(to, from){
    //     this.id = to.params.id;
    //   }
    // },
    methods: {
      navigateHome(){
        this.$router.push('/');
      }
    }
  }
</script>
