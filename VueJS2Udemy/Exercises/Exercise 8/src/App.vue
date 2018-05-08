<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <br>
                <button class="btn btn-primary" @click="cmp='appBlue'">Load Blue Template</button>
                <button class="btn btn-success" @click="cmp='appGreen'">Load Green Template</button>
                <button class="btn btn-danger" @click="cmp='appRed'">Load Red Template</button>
                <hr>
                <component :is="cmp"><p>I'm a {{ getColor }} colored div.</p></component>
            </div>
        </div>
    </div>
</template>

<script>
    import Blue from './components/Blue.vue';
    import Green from './components/Green.vue';
    import Red from './components/Red.vue';

    export default {
      data: function(){
        return {
          cmp: 'appBlue'
        }
      },
      components: {
          appBlue: Blue,
          appGreen: Green,
          appRed: Red
      }, 
      computed: {
        getColor(){
          return this.cmp.split(/([A-Z].*)/)[1];
        }
      }
    }
</script>

<style>
</style>
