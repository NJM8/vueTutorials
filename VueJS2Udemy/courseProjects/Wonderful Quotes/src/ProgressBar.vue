<template>
<div class="progressOuter">
  <div class="progressInner" :style="{width: progressCalc + '%'}">
    {{ progress }}/10
  </div>
</div>
</template>

<script>
  export default {
    props: {
      progress: Number
    },
    computed: {
      progressCalc(){
        return this.progress * 10;
      }
    }
  }
</script>

<style>
.progressOuter {
  width: 600px;
  height: 30px;
  border: 2px solid #35495e;
  border-radius: 3px;
  margin: 0 auto;
  color: white;
}

.progressInner {
  background-color: #42b983;
  border-radius: 1px;
  height: 100%;
  text-align: center;
  transition: width 500ms;
}
</style>

