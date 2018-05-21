<template>
  <div class="stockCard border border-dark rounded">
    <p class="m-2 text-white">Stock: {{ stock }}</p>
    <p class="m-2 text-white">Value: 
      <transition name="fade" mode="out-in">
        <span :key="value">{{ formatValue }}</span>
      </transition>
    </p>
    <p class="m-2 text-white" v-if="displayOwned">Stocks Owned: {{ qtyOwned }} Total Value: {{ totalValue }}</p>
    <div class="input-group m-2 mt-3 w-75">
      <input 
        class="form-control" 
        type="number" 
        v-model="inputValue" 
        @keyup.enter="performAction({'name': stock, 'qty': inputValue})"
        :class="{danger: inputValue > qtyOwned || canBuy}">
      <div class="input-group-append">
        <button class="btn btn-primary" 
          @click="performAction({'name': stock, 'qty': inputValue})"
          :disabled="canBuy || inputValue > qtyOwned || inputValue <= 0 || !Number.isInteger(Number(inputValue))">{{ action }}</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  props: ['stock', 'value', 'action', 'displayOwned', 'qtyOwned'],
  data(){
    return {
      inputValue: 0
    }
  },
  methods: {
    ...mapGetters({
      getFunds: 'getFunds'
    }),
    performAction(payload){
      this.$emit('performed-action', payload);
      this.inputValue = 0;
    }
  },
  computed: {
    formatValue(){
      return `$${this.value}`;
    },
    totalValue(){
      return `$${this.value * this.qtyOwned}`;
    },
    canBuy(){
      return this.displayOwned ? false : (this.inputValue * this.value) > this.getFunds();
    }
  }
}
</script>

<style>
.danger {
  border: 2px solid firebrick !important;
}
.stockCard {
  width: 400px;
  background-color: #42b883;
  margin: 10px;
}
.fade-enter {
  opacity: 0;
}
.fade-enter-active {
  transition: all 500ms;
}
.fade-leave-active {
  transition: all 500ms;
  /* here we define our transition again as it needs to take place and what we are transitioning too */
  opacity: 0;
}
</style>
