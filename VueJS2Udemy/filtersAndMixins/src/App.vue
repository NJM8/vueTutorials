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
            </div>
        </div>
    </div>
</template>

<script>
    export default {
      data(){
        return {
          text: 'Hello Vue!',
          fruits: ['Apple', 'Banana', 'Mango', 'Blueberries'],
          filterText: ''
        }
      },
      // note that filters can only be run on re-rendering of the DOM
      filters: {
        toUppercase(value){
          return value.toUpperCase();
        }
      },
      // a better choice can be computed props 
      computed: {
        filteredFruits(){
          return this.fruits.filter(element => {
            return element.match(this.filterText);
          });
        }
      }
    }
</script>

<style>

</style>
