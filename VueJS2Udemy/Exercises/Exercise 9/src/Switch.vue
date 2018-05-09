<template>
  <div>
    <div id="on"
         @click="switched(true)"
         :class="{active :value}">Yes</div>
    <div id="off"
          @click="switched(false)"
          :class="{active: !value}">No</div>
  </div>
</template>

<script>
export default {
  props: ['value'],
  methods: {
    switched(isOn){
      this.$emit('input', isOn)
    }
  }
}  
</script>

<style scoped>
  #on, #off {
    width: 40px;
    height: 20px;
    background-color: lightgray;
    padding: 2px;
    display: inline-block;
    margin: 10px -2px;
    box-sizing: content-box;
    cursor: pointer;
    text-align: center;
  }

  #on {
    border-top-left-radius: 3px;
    border-bottom-left-radius: 3px;
  }

  #off {
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
  }

  #on:hover {
    background-color: lightgreen;
  }

  #on.active {
    background-color: #42b883;
  }

  #off:hover {
    background-color: lightcoral;
  }

  #off.active {
    background-color: firebrick;
  }
</style>

