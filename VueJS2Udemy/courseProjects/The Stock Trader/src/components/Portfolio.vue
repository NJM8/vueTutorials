<template>
  <div class="w-100 border rounded d-flex flex-wrap justify-content-center mt-3">
    <app-stock 
      v-for="thisStock in stocks" 
      :key="thisStock.name"
      :stock="thisStock.name"
      :value="thisStock.value"
      :action="action"
      :displayOwned="true"
      :qtyOwned="getQtyOwned(thisStock.name)"
      v-on:performed-action="sellStock">
    </app-stock>
  </div>
</template>

<script>
import Stock from './Stock.vue'
import { mapGetters } from 'vuex'
import { mapMutations } from 'vuex'

export default {
  data(){
    return {
      action: 'Sell',
    }
  },
  components: {
    'app-stock': Stock
  },
  computed: {
    ...mapGetters({
      stocks: 'getStocks',
      getOwnedStocks: 'getOwnedStocks'
    })   
  },
  methods: {
    ...mapMutations({
      sellStock: 'sellStock'
    }),
    getQtyOwned(thisStock){
      const stocks = this.getOwnedStocks;
      for (let i = 0; i < stocks.length; i++) {
        if (stocks[i].name === thisStock) {
          return stocks[i].owned
        }
      }
    } 
  }
}
</script>

<style>

</style>
