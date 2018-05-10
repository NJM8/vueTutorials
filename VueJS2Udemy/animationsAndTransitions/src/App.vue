<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Animations</h1>
        <hr>
        <button class="btn btn-primary" @click="show = !show">Show Alert</button>
        <br><br>
        <transition name="fade">
          <div class="alert alert-info" v-show="show">This is some Info</div>
        </transition>
        <!-- here since we are using animation and transition you can add the type property to tell VueJS which one dictates the length of the animations/tranistions. this way the element is removed after the time specified in what you tell it, otherwise it uses the longest length  -->
        <transition name="slide" type="animation">
          <div class="alert alert-info" v-if="show">This is some Info</div>
        </transition>
        <!-- appear will run the animation during the initial loading -->
        <!-- you can also specify your own classes to use for the enter and leave classes, this allows you to use something like the animate css library very easily -->
        <transition 
          enter-active-class="animated bounce"
          leave-active-class="animated shake" 
          appear>
          <div class="alert alert-info" v-if="show">This is some Info</div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      show: true
    };
  }
};
</script>

<style>
/* enter and leave final states are only active for one frame at the very start and end of the animation */
.fade-enter {
  opacity: 0;
}
.fade-enter-active {
  transition: all 700ms;
  /* no need to add opacity: 1; as it is the natural state, if you do add it, the change will take place immediately */
  /* opacity: 1; */
}
.fade-leave {
  /* again nothing is needed here as the v-if will remove the element in the final frame anyways */
  /* opacity: 1; */
}
.fade-leave-active {
  transition: all 700ms;
  /* here we define our transition again as it needs to take place and what we are transitioning too */
  opacity: 0;
}

.slide-enter {
  opacity: 0;
  /* no initial state is needed as it is set up by the keyframe */
}
.slide-enter-active {
  transition: opacity 500ms;
  animation: slide-in 700ms ease-out forwards;
}
.slide-leave {
  /* again no initial state needed as the element is in its normal position */
}
.slide-leave-active {
  animation: slide-out 700ms ease-out forwards;
  transition: opacity 3s;
  opacity: 0;
}

@keyframes slide-in {
  from {
    transform: translateY(20px);
  }
  to {
    transform: translateY(0);
  }
}
@keyframes slide-out {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(20px);
  }
}
</style>
