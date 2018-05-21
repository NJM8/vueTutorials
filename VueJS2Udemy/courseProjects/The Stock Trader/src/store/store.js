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
      defaultValue: 136,
      value: 0
    },
      {
      name: 'Apple',
      defaultValue: 357,
      value: 0
    },
      {
      name: 'Google',
      defaultValue: 563,
      value: 0
    },
      {
      name: 'Tesla',
      defaultValue: 98,
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
    },
    getDataToSave(state){
      let data = [];
      state.stocks.forEach(stock => {
        data.push(stock);
      });
      state.stocksOwned.forEach(stock => {
        data.forEach(st => {
          if (stock.name === st.name) {
            st.qty = stock.qty;
          }
        });
      });
      data.push({name: 'funds', value: state.funds});
      return data;
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
          newLowerStock = 1;
        }
        const setHigher = helpers.getRandVal(0, 10);
        setHigher > 2 ? stock.value = newHigherStock : stock.value = newLowerStock;
      })
    },
    initializeStockValues(state){
      state.stocks.forEach(stock => {
        stock.value = stock.defaultValue;
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
          state.funds += ( stock.qty * value );
          stock.qty -= payload.qty;
        }
      })
    },
    resetStocksAndFunds(state, payload){
      payload.forEach(st => {
        if (st.name === 'funds') {
          state.funds = st.value;
        }
      });
      state.stocksOwned.forEach(stock => {
        payload.forEach(st => {
          if (stock.name === st.name) {
            stock.qty = st.qty;
          }
        })
      });
      state.stocks.forEach(stock => {
        payload.forEach(st => {
          if (stock.name === st.name) {
            stock.value = st.value;
          }
        })
      });
    },
    buyStock(state, payload){
      let value = 0;
      state.stocks.forEach(stock => {
        if (stock.name === payload.name) {
          value = stock.value;
        }
      })
      state.stocksOwned.forEach(stock => {
        if (stock.name === payload.name) {
          stock.qty += Number(payload.qty);
          state.funds -= ( payload.qty * value );
        }
      })
    }
  }
})