import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    stocks: [
      {
      name: 'BMW',
      value: 123
    },
      {
      name: 'Apple',
      value: 254
    },
      {
      name: 'Google',
      value: 654
    },
      {
      name: 'Tesla',
      value: 98
    },
  ]
  },
  getters: {
    getStocks(state){
      return state.stocks
    }
  },
  mutations: {
    setStocks(state, payload){
      state.stocks.forEach(stock => {
        if (stock.name === payload.name) {
          stock.value = payload.value;
        }
      })
    }
  }
})