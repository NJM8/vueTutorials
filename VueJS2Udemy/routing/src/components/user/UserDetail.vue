<template>
  <div>
    <h3>Some User Details</h3>
    <p>User id: {{ id }}</p>
  </div>
</template>

<script>
  export default {
    props: {
      id: String
    }
  }
</script>