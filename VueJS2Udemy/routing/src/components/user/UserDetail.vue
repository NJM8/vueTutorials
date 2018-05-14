<template>
  <div>
    <h3>Some User Details</h3>
    <p>User id: {{ id }}</p>
    <router-link tag="button" class="btn btn-primary" :to="link">Edit user</router-link>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        link: { 
          name: 'userEdit', 
          query: { 
            locale: 'en', 
            q: 100 
          },
          hash: '#data'
        }
      }
    },
    props: {
      id: String
    },
    beforeRouteEnter: (to, from, next) => {
      console.log('inside component');
      next();
    }
  }
</script>