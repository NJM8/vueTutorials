<template>
  <div>
    <!-- using slot to pass in html from the parent element -->
    <slot name="title" class="title"></slot>
    <hr>
    <!-- a default slot that will always pass in unnamed slots -->
    <slot></slot>
    <!-- a slot with default content if it does not receive any html -->
    <span><slot name="details">Quote Details</slot></span>
  </div>
</template>

<script>
  export default {

  }
</script>

<style scoped>
div {
  border: 1px solid slategray;
  box-shadow: 1px 1px 2px #42b983;
  padding: 30px;
  margin: 30px auto;
  text-align: center;
}
/* note that styling is overwritten here */
h2 {
  color: #42b983;
}

.title {
  font-style: italic;
}
</style>

