<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Directives Exercise</h1>
                <!-- Exercise -->
                <!-- Build a Custom Directive which works like v-on (Listen for Events) -->
                <p>isOn: {{ isOn }}</p>
                <button v-myon:click="switchOn">Switch isOn</button>
                <div class="square" v-myon:mouseenter="changeColorGreen" v-myon:mouseleave="changeColorBlue" :style="{backgroundColor: myColor}"></div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
      data(){
        return {
          isOn: true,
          myColor: '#35495e'
        }
      },
      methods: {
        switchOn(){
          this.isOn = !this.isOn;
        },
        changeColorGreen(){
          this.myColor = '#42b883';
        },
        changeColorBlue(){
          this.myColor = '#35495e';
        }
      },
      directives: {
        'myon': {
          bind(el, binding){
            el.addEventListener(binding.arg, binding.value);
          }
        }
      }
    }
</script>

<style>
.square {
  width: 100px;
  height: 100px;
}
</style>
