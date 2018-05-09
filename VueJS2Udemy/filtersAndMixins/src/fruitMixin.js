export const fruitMixin = {
   data(){
    return {
      fruits: ['Apple', 'Banana', 'Mango', 'Blueberries'],
      filterText: ''
    }
  },
  computed: {
    filteredFruits(){
      return this.fruits.filter(element => {
        return element.match(this.filterText);
      });
    }
  }
}
