<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Built in Directives</h1>
                <!-- an example of a built in directive, along with v-on, v-model, v-if, v-show, v-for, v-bind etc etc -->
                <p v-text="'Some Text'"></p>
                <!-- be careful with this! sanitize inputs to prevent XSS -->
                <p v-html="'<strong>Some Strong Text</strong>'"></p>
            </div>
        </div>
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Custom Directives</h1>
                <p v-highlight:background.delayed="'slategrey'">Color This</p>
                <p v-local-highlight:background.delayed.blink="{mainColor: 'red', secondColor: 'green', delay: 500}">Color This</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
      directives: {
        'local-highlight': {
          bind(el, binding){
            let delay = 0;
            if (binding.modifiers['delayed']) {
              delay = 3000;
            }
            if (binding.modifiers['blink']) {
              let mainColor = binding.value.mainColor;
              let secondColor = binding.value.secondColor;
              let currentColor = mainColor;
              setTimeout(() => {
                setInterval(() => {
                  currentColor === secondColor ? currentColor = mainColor : currentColor = secondColor;
                  if (binding.arg === 'background') {
                    el.style.backgroundColor = currentColor;
                  } else {
                    el.style.color = currentColor;
                  }
                }, binding.value.delay)
              }, delay);
            } else {
              setTimeout(() => {
                if (binding.arg === 'background') {
                  el.style.backgroundColor = binding.value.mainColor;
                } else {
                  el.style.color = binding.value.mainColor;
                }
              }, delay);
            }
          }
        }
      }
    }
</script>

<style>

</style>
