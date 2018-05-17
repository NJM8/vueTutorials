<template>
  <div class="stockCard border border-dark rounded">
    <p class="m-2 text-white">Stock: {{ stock }}</p>
    <p class="m-2 text-white">Value: {{ formatValue }}</p>
    <p class="m-2 text-white" v-if="displayOwned">Stocks Owned: {{ qtyOwned }} Total Value: {{ totalValue }}</p>
    <div class="input-group m-2 mt-3 w-75">
      <input class="form-control" type="text" v-model="inputValue">
      <div class="input-group-append">
        <button class="btn btn-primary" @click="performAction({'name': stock, 'qty': inputValue})">{{ action }}</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['stock', 'value', 'action', 'displayOwned', 'qtyOwned'],
  data(){
    return {
      inputValue: 0
    }
  },
  methods: {
    performAction(payload){
      if (this.inputValue < 1) {
        return;
      } else if (/[^0-9]/.test(this.inputValue)) {
        alert('You can only enter numbers.');
      } else {
        this.$emit('performed-action', payload);
        this.inputValue = 0;
      }
    }
  },
  computed: {
    formatValue(){
      return `$${this.value}`;
    },
    totalValue(){
      return `$${this.value * this.qtyOwned}`;
    }
  }
}
</script>

<style>
.stockCard {
  width: 400px;
  background-color: #42b883;
  margin: 10px;
}
</style>
