<template>
    <div class="container">
        <div class="row">
                <input v-model="filterText">
                <ul>
                  <li v-for="fruit in filteredFruits" :key="fruit">{{ fruit }}</li>
                </ul>
        </div>
    </div>
</template>

<script>
import { fruitMixin } from './fruitMixin'
    export default {
      mixins: [fruitMixin],
      // this will run after the logs from the mixin, the cmp always has the last word
      created(){
        console.log('Created by List cmp');
      }
    }
</script>

<style>

</style>
