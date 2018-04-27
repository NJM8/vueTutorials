Vue.component('productDetails', {
  template: `
    <div>
      <ul>
        <li v-for="detail in details">{{ detail }}</li>
      </ul>
    </div>
  `,
  props: {
    details: {
      type: Array,
      required: true
    }
  }
})


Vue.component('product', {
  template: `
  <div class="product">
    <div class="product-image">
      <img v-bind:src="image" alt="">
    </div>
    <div class="product-info">
      <h1>{{ title }}</h1>
      <h3>{{ description }}</h3>
      <productDetails :details="details"></productDetails>
      <p v-if="inStock >= 10">In Stock</p>
      <p v-else-if="inStock < 10 && inStock > 0">Almost sold out</p>
      <p v-else :class="{ outOfStock: !inStock }">Out of Stock</p>
      <div 
        v-for="(variant, index) in variants" 
        :key="variant.variantId"
        class="color-box"
        :style="{ backgroundColor: variant.variantColor }"
        @mouseover="updateProduct(index)"
        >
      </div>
      <div v-for="size in sizes">{{ size }}</div>
      <h4 v-show="onSale">On Sale!</h4>
      <p>Shipping: {{ shipping }}</p>
      <button 
        v-on:click="addToCart"
        :disabled="!inStock"
        :class="{ disabledButton: !inStock }"
        >Add to Cart</button>
      <button 
        v-on:click="removeFromCart"
        :disabled="!inStock"
        :class="{ disabledButton: !inStock }"
        >Remove from Cart</button>
    </div>
  </div>
  `,
  data(){
   return {
      brand: 'Vue Mastery',
      product: 'Socks',
      description: 'A pair of warm socks',
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
      sizes: ['small', 'medium', 'large']
    } 
  },
  methods: {
    addToCart: function(){
      this.$emit('add-to-cart', this.variants[this.selectedVariant].variantId);
    },
    removeFromCart: function(){
      this.$emit('remove-from-cart', this.variants[this.selectedVariant].variantId);
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
    },
    shipping(){
      return this.premium ? 'Free' : '$2.99';
    }
  },
  props: {
    premium: {
      type: Boolean,
      required: true
    }
  }
})

var app = new Vue({
  el: '#app',
  data: {
    creator: 'https://www.natethedev.com',
    premium: true,
    cart: []    
  },
  methods: {
    addToCart: function(id){
      this.cart.push(id);
    },
    removeFromCart: function(id){
      for (let i = 0; i < this.cart.length; i++) {
        if (this.cart[i] === id) {
          this.cart.splice(i, 1);
        }
      }
    }
  }
})
