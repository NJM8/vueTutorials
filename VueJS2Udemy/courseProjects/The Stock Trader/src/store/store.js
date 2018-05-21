import Vue from 'vue';
import Vuex from 'vuex';
import * as helpers from '../helpers/helpers'

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    userIp: undefined,    
    funds: 10000,
    stocksOwned: [
      {
      name: 'BMW',
      qty: 0
    },
      {
      name: 'Apple',
      qty: 0
    },
      {
      name: 'Google',
      qty: 0
    },
      {
      name: 'Tesla',
      qty: 0
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
    },
    getIp(state){
      return state.userIp;
    }
  },
  mutations: {
    setIp(state, payload){
      state.userIp = payload.replace(/\./g, '');
    },
    updateStockValues(state){
      state.stocks.forEach(stock => {
        const newHigherStock = helpers.getRandVal(stock.value + 1, stock.value + 10);
        let newLowerStock = helpers.getRandVal(stock.value - 30, stock.value - 1);
        if (newLowerStock < 0) {
          newLowerStock = 0;
        }
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
      let value = 0;
      state.stocks.forEach(stock => {
        if (stock.name === payload.name) {
          value = stock.value;
        }
      })
      state.stocksOwned.forEach(stock => {
        if (stock.name === payload.name) {
          if (stock.qty < payload.qty) {
            alert(`You only have ${stock.qty} of this stock to sell`);
            return;
          }
          state.funds += ( stock.qty * value );
          stock.qty -= payload.qty;
        }
      })
    },
    resetStocksAndFunds(state){
      state.funds = 10000;
      state.stocksOwned.forEach(stock => {
        stock.qty = 0;
      })
    },
    buyStock(state, payload){
      let value = 0;
      state.stocks.forEach(stock => {
        if (stock.name === payload.name) {
          value = stock.value;
        }
      })
      if (state.funds < (value * payload.qty)){
        alert('You do not have enough funds');
        return;
      }
      state.stocksOwned.forEach(stock => {
        if (stock.name === payload.name) {
          stock.qty += Number(payload.qty);
          state.funds -= ( payload.qty * value );
        }
      })
    }
  }
})