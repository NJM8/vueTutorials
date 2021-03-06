var eventBus = new Vue();

Vue.component('product-review', {
  template: `
    <form class="review-form" @submit.prevent="onSubmit">
      <p v-if="errors.length">
        <b>Please correct the following error(s):</b>
        <ul>
          <li v-for="error in errors">{{ error }} </li>
        </ul>
      </p>
      <p>
        <label for="name">Name:</label>
        <input id="name" v-model="name">
      </p>
      <p>
        <label for="review">Review:</label>
        <textarea name="review" id="review" cols="30" rows="10" v-model="review"></textarea>
      </p>
      <p>
        <label for="rating">Rating:</label>
        <select name="rating" id="rating" v-model.number="rating">
          <option value="5">5</option>
          <option value="4">4</option>
          <option value="3">3</option>
          <option value="2">2</option>
          <option value="1">1</option>
        </select>
      </p>
      <p>
        <p>Would you recommend this product to a friend?</p>
        <label for="Yes">Yes</label>
        <input type="radio" name="recommendation" v-model="recommendation" value="Yes" id="Yes">
        <label for="No">No</label>
        <input type="radio" name="recommendation" v-model="recommendation" value="No" id="No">
      </p>
      <p>
      <input type="submit" value="Submit">
      </p>
    </form>
  `,
  data(){
    return {
      name: null,
      review: null,
      rating: 5,
      recommendation: null,
      errors: []
    }
  },
  methods: {
    onSubmit(){
      if (this.name && this.review && this.rating && this.recommendation) {
        let productReview = {
          name: this.name,
          rating: this.rating,
          review: this.review,
          recomendation: this.recommendation
        }
        eventBus.$emit('review-submitted', productReview);
        this.name = null;
        this.rating = 5;
        this.review = null;
        this.recommendation = null;
        this.errors = [];
      } else {
        this.errors = [];
        if (!this.name) this.errors.push('Name required')
        if (!this.rating) this.errors.push('Rating required')
        if (!this.review) this.errors.push('Review required')
        if (!this.recommendation) this.errors.push('Recommendation required')
      }
    }
  }
})

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
      <div>
        <span class="tab"
        :class="{activeTab: selectedTab === tab}"
        v-for="(tab, index) in tabs"
        :key="index"
        @click="selectedTab = tab">
        {{ tab }}
        </span>
      </div>
      <productDetails :details="details" v-show="selectedTab === 'Details'"></productDetails>
      <p v-show="selectedTab === 'Shipping'">Shipping: {{ shipping }}</p>      
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
    <product-tab :reviews="reviews"></product-tab>
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
      sizes: ['small', 'medium', 'large'],
      reviews: [],
      tabs: ['Details', 'Shipping'],
      selectedTab: 'Details'
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
  },
  mounted(){
    eventBus.$on('review-submitted', productReview => {
      this.reviews.push(productReview);      
    })
  }
})

Vue.component('product-tab', {
  template: `
<div>
  <div>
    <span class="tab"
    :class="{activeTab: selectedTab === tab}"
    v-for="(tab, index) in tabs"
    :key="index"
    @click="selectedTab = tab">
    {{ tab }}
    </span>
  </div>
  <div v-show="selectedTab === 'Reviews'">
    <h2>Reviews</h2>
    <p v-if="reviews.length === 0">There are no reviews yet</p>
    <ul>
      <li v-for="review in reviews">
        <p>Name: {{ review.name }}</p>
        <p>Rating: {{ review.rating }}</p>
        <p>Review: {{ review.review }}</p>
        <p>Recommended: {{ review.recomendation }}</p>
      </li>
    </ul>
  </div>
  <product-review v-show="selectedTab === 'Make a Review'"></product-review>
</div>
  `,
  data(){
    return {
      tabs: ['Reviews', 'Make a Review'],
      selectedTab: 'Reviews'
    }
  },
  props: {
    reviews: {
      type: Array,
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
          return;
        }
      }
    }
  }
})
