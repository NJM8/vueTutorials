<template>
  <div>
    <p>Double Counter is: {{ doubleCounter }}</p>
    <p>Number of clicks is: {{ stringCounter }}</p>
    <p>My computed property is: {{ myCompProp }}</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import * as types from '../store/types'

  export default {
    computed: {
      ...mapGetters({
        doubleCounter: types.DOUBLE_COUNTER,
        stringCounter: types.CLICK_COUNTER
      }),
      myCompProp(){
        return 2;
      } 
    }
  }
</script>