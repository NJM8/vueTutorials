<template>
  <div class="w-100 border rounded d-flex flex-wrap justify-content-center mt-3">
    <app-stock 
      v-for="thisStock in stocks" 
      :key="thisStock.name"
      :stock="thisStock.name"
      :value="thisStock.value"
      :action="action"
      v-on:performed-action="buyStock">
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
      action: 'Buy'
    }
  },
  components: {
    'app-stock': Stock
  },
  methods: {
    ...mapMutations({
      buyStock: 'buyStock'
    })
  },
  computed: {
    ...mapGetters({
      stocks: 'getStocks'
    })
  }
}
</script>

<style>

</style>
