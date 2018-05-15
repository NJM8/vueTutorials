<template>
    <div>
      <button class="btn btn-primary" @click="increment(100)">Increment by 100</button>
      <button class="btn btn-primary" @click="decrement(50)">Decrement by 50</button>
      <button class="btn btn-primary" @click="asyncIncrement({by: 25, duration: 1000})">Async Increment by 25 in 1 sec</button>
      <button class="btn btn-primary" @click="asyncDecrement({by: 50, duration: 500})">Async Decrement by 50 in 500 ms</button>
    </div>
</template>

<script>
// import { mapMutations } from 'vuex';
import { mapActions } from 'vuex';
    export default {
        methods: {
            ...mapActions([
              'increment',
              'decrement',
              'asyncIncrement',
              'asyncDecrement'
            ])
        }
    }
</script>