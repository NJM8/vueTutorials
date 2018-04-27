var app = new Vue({
  el: '#app',
  data: {
    product: 'Socks',
    image: './images/vmSocks-green-onWhite_preview.jpeg',
    inStock: true,
    inventory: 25,
    details: ['80% cotton', '20% polyester', 'Fuzz Free'],
    variants: [
      {
        variantId: 2234,
        variantColor: 'green',
        variantImage: './images/vmSocks-green-onWhite_preview.jpeg'
      },
      {
        variantId: 2235,
        variantColor: 'blue',
        variantImage: './images/vmSocks-blue-onWhite_preview.jpeg'
      }
    ],
    cart: 0
  },
  methods: {
    addToCart: function(){
      this.cart++;
    },
    updateProduct: function(variantImage){
      this.image = variantImage;
    }
  }
})
