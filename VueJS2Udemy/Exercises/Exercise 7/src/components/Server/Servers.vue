<template>
    <div class="col-xs-12 col-sm-6">
        <ul class="list-group">
            <li
              class="btn list-group-item"
              v-for="server in servers"
              :key="server.id"
              @click="displayServer(server.id, server.status)">
                Server #{{ server.id }}
            </li>
        </ul>
    </div>
</template>

<script>
  import { eventBus } from '../../main'

  export default {
    data: function(){
      return {
        servers: [
          {id: 1, status: 'Normal'},
          {id: 2, status: 'Critical'},
          {id: 3, status: 'Unknown'},
          {id: 4, status: 'Normal'},
          {id: 5, status: 'Normal'}
        ]
      }
    },
    methods: {
      displayServer(id, status){
        eventBus.showServer(id, status);
      }
    },
    created(){
      eventBus.$on('updateStatus', (update) => {
        this.servers.forEach(server => {
          if (server.id === update.id) {
            server.status = update.status;
          }
        })
      })
    }
  }
</script>

<style>

</style>
