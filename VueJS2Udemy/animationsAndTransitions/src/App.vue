<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Animations</h1>
        <hr>
        <button class="btn btn-primary" @click="show = !show">Show Alert</button>
        <br><br>
        <transition name="fade">
          <div class="alert alert-info" v-if="show">This is some Info</div>
        </transition>
        <transition name="slide">
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
  /* no initial state is needed as it is set up by the keyframe */
}
.slide-enter-active {
  animation: slide-in 700ms ease-out forwards;
}
.slide-leave {
  /* again no initial state needed as the element is in its normal position */
}
.slide-leave-active {
  animation: slide-out 700ms ease-out forwards;
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
