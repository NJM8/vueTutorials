<template>
<div class="container" id="main">
  <div class="row">
    <div class="col-12">
      <h1 class="text-center">Wonderful Quotes</h1>
      <progress-bar :progress="quotes.length"></progress-bar>
      <div class="row text-center">
        <h4>Write a new Quote</h4>
        <textarea class="newQuote" id="newQuote" cols="30" rows="5" v-model="newQuote"></textarea>
      </div>
      <div class="row text-center">
        <button class="btn btn-primary" @click="addNewQuote">Add Quote</button>
      </div>
      <div class="row">
        <h3 class="text-center">My Quotes:</h3>
        <div class="quoteContainer">
          <quote-display v-for="quote in quotes" :key="quote.id" @deleteQuote="deleteQuote(quote.id)" :id="quote.id">
            <p slot="quote" class="content">{{ quote.content }}</p>
          </quote-display>
        </div>
        <h4 class="text-center">Click a Quote to delete it</h4>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import QuoteDisplay from './QuoteDisplay';
import ProgressBar from './ProgressBar';

export default {
  data() {
    return {
      quotes: [],
      newQuote: '',
      nextQuoteId: 0
    }
  },
  methods: {
    addNewQuote(){
      if (this.nextQuoteId === 10 || this.newQuote === '') {
        return;
      }
      let newQ = {};
      newQ.id = this.nextQuoteId;
      newQ.content = this.newQuote;
      this.quotes.push(newQ);
      this.newQuote = '';
      this.nextQuoteId++;
    },
    deleteQuote(id){
      console.log(id);
      this.nextQuoteId--;
      this.quotes.forEach((quote, index) => {
        if (quote.id === id) {
          this.quotes.splice(index, 1);
          this.quotes.forEach((quote, i) => {
            if (quote.id > index) {
              quote.id--;
            }
          })
          return;
        }
      })
    }
  },
  components: {
    'quote-display': QuoteDisplay,
    'progress-bar': ProgressBar
  }
}
</script>

<style>
.content {
  padding: 5px;
}

.quoteContainer {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.newQuote {
  border: 2px solid #42b983; 
  border-radius: 5px;
}
</style>
