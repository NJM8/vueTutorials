<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light mt-2 border rounded">
    <a class="navbar-brand noPointer">Stock Trader</a>
    <ul class="navbar-nav d-flex w-100">
      <router-link to="/" tag="li" active-class="active" exact class="nav-item">
        <a class="nav-link">Home</a>
      </router-link>
      <router-link to="/portfolio" tag="li" active-class="active" class="nav-item">
        <a class="nav-link">Portfolio</a>
      </router-link>
      <router-link to="/stocks" tag="li" active-class="active" class="nav-item">
        <a class="nav-link">Stocks</a>
      </router-link>
      <li class="nav-item dropdown ml-auto mr-2"
            :class="{show :openDropdown}"
            @click="openDropdown = !openDropdown">
        <a class="nav-link dropdown-toggle"
            id="navbarDropdownMenuLink" 
            data-toggle="dropdown" 
            aria-haspopup="true">
          Save & Load Data
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink" :class="{show :openDropdown}">
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
  </nav> 
</template>

<script>
import { mapGetters } from 'vuex'
import { mapMutations } from 'vuex'

export default {
  data(){
    return {
      openDropdown: false
    }
  },
  methods: {
    ...mapMutations({
      updateStockValues: 'updateStockValues',
      buyStock: 'buyStock',
      resetStocksAndFunds: 'resetStocksAndFunds'
    }),
    saveData(){
      this.$http.put(`https://the-stock-trader-59331.firebaseio.com/${this.getIp}.json`, this.getDataToSave)
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
          this.resetStocksAndFunds(data);
          alert('Saved Data Loaded');
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
      getDataToSave: 'getDataToSave'
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
