<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Filters & Mixins</h1>
                <p>{{ text | toUppercase | to-lowercase }}</p>
                <hr>
                <input v-model="filterText">
                <ul>
                  <li v-for="fruit in filteredFruits" :key="fruit">{{ fruit }}</li>
                </ul>
                <app-list></app-list>
            </div>
        </div>
    </div>
</template>

<script>
import List from './List.vue'
import { fruitMixin } from './fruitMixin'

    export default {
      data(){
        return {
          text: 'Hello Vue!'
        }
      },
      // note that filters can only be run on re-rendering of the DOM
      filters: {
        toUppercase(value){
          return value.toUpperCase();
        }
      },
      // a better choice can be computed props 
      // computed: {
      //   filteredFruits(){
      //     return this.fruits.filter(element => {
      //       return element.match(this.filterText);
      //     });
      //   }
      // },
      components: {
        'app-list': List
      },
      // note that mixins are added to existing data and methods, nothing from the original is destroyed, if data already exists on the sft it will use that data.
      mixins: [fruitMixin]
    }
</script>

<style>

</style>
