<template>
  <div class="component">
    <h3>You may view the User Details here</h3>
    <p>Many Details</p>
    <p>User name: {{ switchName() }}</p>
    <p>User age: {{ userAge }}</p>
    <!-- here we use a custom event to emit the name change back up the parent -->
    <button @click="resetName">Reset name from child</button>
    <!-- here the function execution is made available to the child and executed as a callback -->
    <button @click="resetFn()">Reset name from parent</button>
  </div>
</template>

<script>
export default {
  // prop validation
  props: {
    name: {
      type: String,
      required: true
    },
    userAge: {
      type: Number
    },
    resetFn: Function
  },
  methods: {
    switchName: function(){
      return this.name.split('').reverse().join('');
    },
    resetName: function(){
      // note that this is not a good idea when using objects and arrays as they are passed by reference, doing this will break the reference
      // this.name = 'Nate';
      // I stopped using the above as it gave an error to never mutate the data from the child directly, but to pass and event up and let the parent mutate it, thus I am passing the data directly rather than this.name;
      this.$emit('nameWasReset', 'Nate');
    }
  }
}
</script>

<style scoped>
div {
  background-color: lightcoral;
}
</style>
