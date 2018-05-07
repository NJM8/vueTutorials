// this imports our local component and uses it to output 5 copies
<template>
<div>
  <app-server-status v-for="(server, num) in 5" :key="num"></app-server-status>
</div>
</template>

<script>
  import ServerStatus from './ServerStatus'
  export default {
    components: {
      'app-server-status': ServerStatus
    }
  }
</script>
