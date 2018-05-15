<template>
  <div>
    <p>Double Counter is: {{ doubleCounter }}</p>
    <p>Number of clicks is: {{ stringCounter }}</p>
    <p>My computed property is: {{ myCompProp }}</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
    export default {
        computed: {
          ...mapGetters([
          'doubleCounter',
          'stringCounter'
        ]),
        myCompProp(){
          return 2;
        } 
        }
    }
</script>