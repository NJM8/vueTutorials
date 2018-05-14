<template>
  <div>
    <h3>Some User Details</h3>
    <p>User id: {{ id }}</p>
    <router-link tag="button" class="btn btn-primary" :to="{ name: 'userEdit' }">Edit user</router-link>
  </div>
</template>

<script>
  export default {
    props: {
      id: String
    }
  }
</script>