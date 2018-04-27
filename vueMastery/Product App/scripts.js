var app = new Vue({
  el: '#app',
  data: {
    brand: 'Vue Mastery',
    product: 'Socks',
    description: 'A pair of warm socks',
    creator: 'https://www.natethedev.com',
    selectedVariant: 0,
    details: ['80% cotton', '20% polyester', 'Fuzz Free'],
    variants: [
      {
        variantId: 2234,
        variantColor: 'green',
        variantImage: './images/vmSocks-green-onWhite_preview.jpeg',
        variantQuantity: 6
      },
      {
        variantId: 2235,
        variantColor: 'blue',
        variantImage: './images/vmSocks-blue-onWhite_preview.jpeg',
        variantQuantity: 0
      }
    ],
    sizes: ['small', 'medium', 'large'],
    cart: 0
  },
  methods: {
    addToCart: function(){
      this.cart++;
    },
    removeFromCart: function(){
      this.cart--;
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
    },
    onSale(){
      const thisQuantity = this.variants[this.selectedVariant].variantQuantity;
      return thisQuantity < 10 && thisQuantity > 0;
    }
  }
})
