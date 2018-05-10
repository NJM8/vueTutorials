<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1 class="text-center">The Super Quiz</h1>
      </div>
    </div>
    <hr>
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <transition name="flip" mode="out-in">
          <keep-alive>
            <component :is="mode" @answered="answered($event)" @confirmed="mode = 'app-question'" :keepData="keepData"></component>
          </keep-alive>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import Question from "./components/Question.vue";
import Answer from "./components/Answer.vue";
import WrongAnswer from "./components/WrongAnswer.vue";

export default {
  data() {
    return {
      mode: "app-question",
      keepData: false
    };
  },
  methods: {
    answered(isCorrect) {
      if (isCorrect) {
        this.keepData = false;
        this.mode = "app-answer";
      } else {
        this.keepData = true;
        this.mode = "app-wrong-answer";
      }
    }
  },
  components: {
    appQuestion: Question,
    appAnswer: Answer,
    appWrongAnswer: WrongAnswer
  }
};
</script>

<style>
.flip-enter {
  transform: rotateY(-90deg);
}
.flip-enter-active {
  transition: all 500ms ease;
}
.flip-leave-active {
  transition: all 500ms ease;
  transform: rotateY(90deg);
}
</style>


