<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Filters & Mixins</h1>
                <!-- Exercise 1) -->
                <!-- Build a local Filter which reverses the Text it is applied on -->
                <p>{{ text }} Reversed: {{ text | reverseIt }}</p>
                <!-- Exercise 2 -->
                <!-- Build a global Filter which counts the length of a word and it appends it -->
                <!-- Like this: "Test" => Gets Filtered to => "Test (4)" -->
                <p>{{ text }} With length: {{ text | append-length }}</p>
                <!-- Exercise 3 -->
                <!-- Do the same as in Exercises 1 & 2, now with Computed Properties -->
                <p>{{ text }} Reversed computed: {{ reverseItC }}</p>
                <p>{{ text }} With length computed: {{ appendLengthC }}</p>
                <!-- Exercise 4 -->
                <!-- Share the Computed Property rebuilding Exercise 2 via a Mixin -->
                <p>{{ text }} Reversed computed from mixin: {{ reverseItM }}</p>
            </div>
        </div>
    </div>
</template>

<script>
import { ReverseText } from './ReverseText.js'
export default {
  mixins: [ReverseText],
  data(){
    return {
      text: 'Hello Vue!'
    }
  },
  filters: {
    reverseIt(value){
      return value.split('').reverse().join('');
    }
  },
  computed: {
    reverseItC(){
      return this.text.split('').reverse().join('');
    },
    appendLengthC(){
      return `${this.text} (${this.text.length})`;
    }
  }
};
</script>

<style>

</style>
