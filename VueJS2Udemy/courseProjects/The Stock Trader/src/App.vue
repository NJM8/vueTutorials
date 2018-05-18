<template>
  <div class="container">
    <app-header></app-header>
    <transition name="slide" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import { mapMutations } from 'vuex'

export default {
  components: {
    'app-header': Header,
  },
  methods: {
    ...mapMutations({
      initializeStockValues: 'initializeStockValues',
      setIp: 'setIp'
    }),
    getIp(){
      this.$http.get('https://api.ipify.org?format=json')
        .then(res => {
          return res.json();
        })
        .then(data => {
          this.setIp(data.ip);
        }, error => {
          console.log(error);
        })
    }  
  },
  beforeMount(){
    this.initializeStockValues();
    this.getIp();
  }
};
</script>

<style>
.slide-enter {
  transform: translateX(400px);
  opacity: 0;
}
.slide-enter-active {
  transition: all 500ms ease;
}
.slide-leave-active {
  transition: all 500ms ease;
  transform: translateX(-400px);
  opacity: 0;
}
</style>
