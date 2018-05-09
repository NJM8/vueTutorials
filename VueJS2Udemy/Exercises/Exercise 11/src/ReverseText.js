export const ReverseText = {
  computed: {
    reverseItM(){
      return this.text.split('').reverse().join('');
    },
  }
}