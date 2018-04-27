var app = new Vue({
  el: '#app',
  data: {
    brand: 'Vue Mastery',
    product: 'Socks',
    selectedVariant: 0,
    details: ['80% cotton', '20% polyester', 'Fuzz Free'],
    variants: [
      {
        variantId: 2234,
        variantColor: 'green',
        variantImage: './images/vmSocks-green-onWhite_preview.jpeg',
        variantQuantity: 10
      },
      {
        variantId: 2235,
        variantColor: 'blue',
        variantImage: './images/vmSocks-blue-onWhite_preview.jpeg',
        variantQuantity: 0
      }
    ],
    cart: 0
  },
  methods: {
    addToCart: function(){
      this.cart++;
    },
    updateProduct: function(index){
      this.selectedVariant = index;
    }
  }, 
  computed: {
    title(){
      return `${this.brand} ${this.product}`;
    },
    image(){
      return this.variants[this.selectedVariant].variantImage;
    },
    inStock(){
      return this.variants[this.selectedVariant].variantQuantity;
    }
  }
})
