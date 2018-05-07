<template>
  <div class="row">
    <div class="col-xs-12 col-sm-6">
        <ul class="list-group">
            <my-servers v-for="(num, index) in 5" :key="index" v-bind:server="num"></my-servers>
        </ul>
    </div>
    <div class="col-xs-12 col-sm-6">
        <p>Server Details are currently not updated</p>
    </div>
  </div>
</template>

<script>
  import ServerStatus from './ServerStatus.vue'
  export default {
    components: {
      'my-servers': ServerStatus
    }
  }
</script>

<style scoped>
  div {
    border: 1px solid blue;
  }
</style>

