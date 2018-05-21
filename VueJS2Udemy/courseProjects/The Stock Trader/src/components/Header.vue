<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light mt-2 border rounded">
    <a class="navbar-brand noPointer">Stock Trader</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav d-flex w-100">
          <!-- <a>Portfolio<span class="sr-only">(current)</span></a> -->
        <router-link to="/" tag="li" active-class="active" exact class="nav-item">
          <a class="nav-link">Portfolio</a>
        </router-link>
        <router-link to="/stocks" tag="li" active-class="active" class="nav-item">
          <a class="nav-link">Stocks</a>
        </router-link>
        <li class="nav-item dropdown ml-auto mr-2">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Save & Load Data
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <a class="dropdown-item" @click="saveData">Save</a>
            <a class="dropdown-item" @click="getData">Load</a>
          </div>
        </li>
        <li class="nav-item">
          <button class="btn btn-info mr-2" @click="updateStockValues">End Day</button>
        </li>
        <li>
          <a class="navbar-brand noPointer">Funds: {{ getFormattedFunds }}</a>
        </li>
      </ul>
    </div>
  </nav> 
</template>

<script>
import { mapGetters } from 'vuex'
import { mapMutations } from 'vuex'

export default {
  methods: {
    ...mapMutations({
      updateStockValues: 'updateStockValues',
      buyStock: 'buyStock',
      resetStocksAndFunds: 'resetStocksAndFunds'
    }),
    saveData(){
      this.$http.put(`https://the-stock-trader-59331.firebaseio.com/${this.getIp}.json`, this.getOwnedStocks)
        .then(res => {
          alert('Stocks Saved');
          console.log(res);
        }, error => {
          alert('Opps, there was an error saving, try again');
          console.log(error);
        })
    }, 
    getData(){
      this.$http.get(`https://the-stock-trader-59331.firebaseio.com/${this.getIp}.json`)
        .then(res => {
          return res.json();
        })
        .then(data => {
          this.resetStocksAndFunds();
          alert('Saved Data Loaded');
          data.forEach(stock => {
            this.buyStock(stock);
          })
        }, error => {
          alert('Opps, there was an error loading, try again');          
          console.log(error);
        })
    }
  },
  computed: {
    ...mapGetters({
      getFormattedFunds: 'getFormattedFunds',
      getIp: 'getIp',
      getOwnedStocks: 'getOwnedStocks'
    })
  }
}
</script>

<style scoped>
.nav-link {
  cursor: pointer;
}

.noPointer {
  cursor: default !important;
}

.active {
  font-weight: bold;
}
</style>
