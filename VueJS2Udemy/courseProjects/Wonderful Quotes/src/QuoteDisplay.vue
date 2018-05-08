<template>
  <div class="quote">
    <slot name="quote"></slot>
  </div>
</template>

<script>
</script>

<style scoped>
.quote {
  width: 200px;
  min-height: 100px;
  border: 2px solid #42b983; 
  border-radius: 5px;
  margin: 5px;
  cursor: pointer;
}
</style>

