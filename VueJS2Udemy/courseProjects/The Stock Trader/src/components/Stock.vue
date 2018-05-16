<template>
  <div class="stockCard border border-dark rounded">
    <p class="m-2 text-white">Stock: {{ stock }}</p>
    <p class="m-2 text-white">Value: {{ formatValue }}</p>
    <div class="input-group m-2 mt-3 w-75">
      <input class="form-control" type="text" v-model="inputValue">
      <div class="input-group-append">
        <button class="btn btn-primary" @click="performAction">{{ action }}</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['stock', 'value', 'action'],
  data(){
    return {
      inputValue: 0
    }
  },
  methods: {
    performAction(){
      if (this.inputValue < 1) {
        return;
      } else if (/[^0-9]/.test(this.inputValue)) {
        alert('You can only enter numbers.');
      } else {
        this.$emit('performed-action', this.inputValue);
        this.inputValue = 0;
      }
    }
  },
  computed: {
    formatValue(){
      return `$${this.value}`;
    }
  }
}
</script>

<style>
.stockCard {
  width: 400px;
  height: 150px;
  background-color: #42b883;
  margin: 10px;
}
</style>
