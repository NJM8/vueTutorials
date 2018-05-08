<template>
  <div>
    <!-- using slot to pass in html from the parent element -->
    <slot name="title" class="title"></slot>
    <hr>
    <slot name="content"></slot>
  </div>
</template>

<script>
  export default {

  }
</script>

<style>
div {
  border: 1px solid slategray;
  box-shadow: 1px 1px 2px #42b983;
  padding: 30px;
  margin: 30px auto;
  text-align: center;
  width: 65%;
}
/* note that styling is overwritten here */
h2 {
  color: #42b983;
}

.title {
  font-style: italic;
}
</style>

