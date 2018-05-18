import Vue from 'vue';
import Vuex from 'vuex';
import * as helpers from '../helpers/helpers'

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    funds: 10000,
    stocksOwned: [
      {
      name: 'BMW',
      owned: 0
    },
      {
      name: 'Apple',
      owned: 0
    },
      {
      name: 'Google',
      owned: 0
    },
      {
      name: 'Tesla',
      owned: 0
    },
  ],
    stocks: [
      {
      name: 'BMW',
      value: 0
    },
      {
      name: 'Apple',
      value: 0
    },
      {
      name: 'Google',
      value: 0
    },
      {
      name: 'Tesla',
      value: 0
    },
  ]
  },
  getters: {
    getStocks(state){
      return state.stocks;
    },
    getFunds(state){
      return state.funds;
    },
    getFormattedFunds(state){
      return `$${state.funds.toLocaleString()}`;
    },
    getOwnedStocks(state){
      return state.stocksOwned;
    }
  },
  mutations: {
    updateStockValues(state){
      state.stocks.forEach(stock => {
        const newHigherStock = helpers.getRandVal(stock.value + 1, stock.value + 10);
        const newLowerStock = helpers.getRandVal(stock.value - 30, stock.value - 1);
        const setHigher = helpers.getRandVal(0, 10);
        setHigher > 3 ? stock.value = newHigherStock : stock.value = newLowerStock;
      })
    },
    initializeStockValues(state){
      state.stocks.forEach(stock => {
        stock.value = helpers.getRandVal(100, stock.value + 200);
      });
    },
    sellStock(state, payload){
      console.log('sell');
      let value = 0;
      state.stocks.forEach(stock => {
        if (stock.name === payload.name) {
          value = stock.value;
        }
      })
      state.stocksOwned.forEach(stock => {
        if (stock.name === payload.name) {
          if (stock.owned < payload.qty) {
            alert(`You only have ${stock.owned} of this stock to sell`);
            return;
          }
          state.funds += ( stock.owned * value );
          stock.owned -= payload.qty;
        }
      })
    },
    buyStock(state, payload){
      let value = 0;
      state.stocks.forEach(stock => {
        if (stock.name === payload.name) {
          value = stock.value;
        }
      })
      console.log(value);
      if (state.funds < (value * payload.qty)){
        alert('You do not have enough funds');
        return;
      }
      state.stocksOwned.forEach(stock => {
        if (stock.name === payload.name) {
          stock.owned += Number(payload.qty);
          state.funds -= ( payload.qty * value );
        }
      })
    }
  }
})