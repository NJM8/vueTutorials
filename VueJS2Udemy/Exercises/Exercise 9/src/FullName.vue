<template>
  <div>
    <label for="firstName">First Name:</label>
    <input type="text" class="form-control" v-model="firstName" @change="sendData">
    <label for="lastName">Last Name:</label>
    <input type="text" class="form-control" v-model="lastName" @change="sendData">
  </div>
</template>

<script>
  export default {
    data(){
      return {
        firstName: '',
        lastName: ''
      }
    },
    methods: {
      sendData(){
        this.$emit('input', { firstName: this.firstName, lastName: this.lastName })
      }
    }
  }
</script>

<style>

</style>
