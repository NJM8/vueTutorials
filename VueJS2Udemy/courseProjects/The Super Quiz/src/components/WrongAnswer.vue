<template>
  <div class="alert alert-warning text-center">
    <h1>Wrong Answer!</h1>
    <hr>
    <button class="btn btn-primary" @click="tryAgain">Try again</button>
  </div>
</template>
<style>

</style>
<script>
export default {
  methods: {
    tryAgain() {
      this.$emit("confirmed");
    }
  }
};
</script>
