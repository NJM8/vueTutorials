<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Animations</h1>
        <hr>
        <select v-model="alertAnimation" class="form-control">
          <option value="fade">Fade</option>
          <option value="slide">Slide</option>
        </select>
        <br>
        <transition :name="alertAnimation">
          <div class="alert alert-info" v-show="show">This is some Info</div>
        </transition>
        <br>
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
        <br>
        <h1>Multiple elements</h1>
        <button class="btn btn-primary" @click="showMulti = !showMulti">Show Alert</button> 
        <hr>       
        <transition name="fade" mode="out-in">
          <!-- if using multiple elements that only show at one time you need to provide a key otherwise Vue doesn't know which is which, you also must use v-if. use mode in-out or out-in to prevent the elements from sitting on top of each other as one animation starts and another ends -->
          <div class="alert alert-info" v-if="showMulti" key="info">This is some Info</div>
          <div class="alert alert-warning" v-else key="warning">This is some warning Info</div>
        </transition>
        <hr>
        <h1>Using JS</h1>
        <button class="btn btn-primary" @click="load = !load">Load / Remove Element</button>
        <br><br>
        <!-- there are 8 hooks available to be used to attached your own js functions for animations. you can also mix them in with regular transitions if there is something you want do that depends on that transition state -->
        <!-- the css false binding will tell vue not to look for css classes to bind -->
        <transition
          @before-enter="beforeEnter"
          @enter="enter"
          @after-enter="afterEnter"
          @enter-cancelled="enterCancelled"

          @before-leave="beforeLeave"
          @leave="leave"
          @after-leave="afterLeave"
          @leave-cancelled="leaveCancelled"
          :css="false"
          >  
          <div class="myDiv" v-if="load"></div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      show: true,
      showMulti: true,
      alertAnimation: 'fade',
      load: true,
      elementWidth: 100
    };
  },
  methods: {
    beforeEnter(el){
      console.log('beforeEnter');
      this.elementWidth = 100;
      el.style.width = this.elementWidth + 'px';
    },
    enter(el, done){
      console.log('enter');
      let round = 1;
      const interval = setInterval(() => {
        el.style.width = (this.elementWidth + round * 10) + 'px';
        round++;
        if (round > 20) {
          clearInterval(interval);
          // the done function tells Vue JS when this is done running, you must do this as it cannot sniff the JS like it can the CSS
          done();
        }
      }, 20);
    },
    afterEnter(el){
      console.log('afterEnter');
    },
    enterCancelled(el){
      console.log('enterCancelled');
    },
    beforeLeave(el){
      this.elementWidth = 300;
      el.style.width = this.elementWidth + 'px';
      console.log('beforeLeave');
    },
    leave(el, done){
      console.log('leave');
      // the done function tells Vue JS when this is done running, you must do this as it cannot sniff the JS like it can the CSS
      let round = 1;
      const interval = setInterval(() => {
        el.style.width = (this.elementWidth - round * 10) + 'px';
        round++;
        if (round > 20) {
          clearInterval(interval);
          // the done function tells Vue JS when this is done running, you must do this as it cannot sniff the JS like it can the CSS
          done();
        }
      }, 20);
    },
    afterLeave(el){
      console.log('afterLeave');
    },
    leaveCancelled(el){
      console.log('leaveCancelled');
    }
  }
};
</script>

<style>
.myDiv {
  width: 300px; 
  height: 100px; 
  background-color: #42b883;
  border: 1px solid #35495e;
  border-radius: 4px;
}

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
  transition: opacity 1s;
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
