<template>
  <div class="col-xs-12 col-sm-6" v-if="displayDetails">
    <h2>Server Details</h2>
    <hr>
    <p>Server: {{ id }}</p>
    <p>Status: {{ status }}</p>
    <h5>Set Server Status:</h5>
    <button @click="setServerStatus($event.target.textContent)">Normal</button>
    <button @click="setServerStatus($event.target.textContent)">Critical</button>
    <button @click="setServerStatus($event.target.textContent)">Unknown</button>
  </div>
</template>

<script>
import { eventBus } from "../../main";

export default {
  data: function() {
    return {
      displayDetails: false,
      id: 0,
      status: undefined
    };
  },
  methods: {
    setServerStatus(status){
      this.status = status;
      eventBus.changeStatus(this.id, this.status);
    }
  },
  created() {
    eventBus.$on("showServer", (server) => {
      if (server.id === this.id){
        this.displayDetails = false;
        this.id = 0;
        this.displayDetails = undefined;
      } else {
        this.displayDetails = true;
        this.id = server.id;
        this.status = server.status;
      }
    });
  }
};
</script>

<style>

</style>
