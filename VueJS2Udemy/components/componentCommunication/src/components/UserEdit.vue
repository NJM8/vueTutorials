<template>
  <div class="component">
    <h3>You may edit the User here</h3>
    <p>User age: {{ userAge }}</p>    
    <p>Edit me!</p>
    <button @click="editAge">Edit Age</button>
  </div>
</template>

<script>
export default {
  props: ['userAge'],
  methods: {
    editAge: function(){
      this.$emit('ageWasEdited', 30);
    }
  }
}
</script>

<style scoped>
div {
  background-color: lightgreen;
}
</style>
