<template>
  <div class="component">
    <h1>The User Component</h1>
    <p>I'm an awesome User!</p>
    <p>Name: {{ name }}</p>
    <p>User age: {{ age }}</p>
    <button @click="changeName">Change My Name</button>
    <hr>
    <div class="row">
      <div class="col-xs-12 col-sm-6">
        <app-user-detail 
          :name="name" 
          @nameWasReset="name = $event" 
          :resetFn="resetName"
          :userAge="age"></app-user-detail>
      </div>
      <div class="col-xs-12 col-sm-6">
        <app-user-edit 
          :userAge="age"
          ></app-user-edit>
      </div>
    </div>
  </div>
</template>

<script>
import UserDetail from "./UserDetail.vue";
import UserEdit from "./UserEdit.vue";
import { eventBus } from '../main';

export default {
  data: function(){
    return {
      name: 'Nate',
      age: 27
    }
  },
  methods: {
    changeName: function(){
      this.name = 'Anna';
    },
    resetName: function(){
      this.name = 'Nate';
    }
  },
  components: {
    appUserDetail: UserDetail,
    appUserEdit: UserEdit
  },
  created(){
    eventBus.$on('ageWasEdited', (age) => {
      this.age = age;
    })
  }
};
</script>

<style scoped>
div {
  background-color: lightblue;
}
</style>
