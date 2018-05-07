<template>
    <div class="container">
        <my-header></my-header>
        <hr>
        <my-server-list></my-server-list>
        <hr>
        <my-footer></my-footer>
    </div>
</template>

<script>
  import Header from './components/shared/Header.vue'
  import Footer from './components/shared/Footer.vue'
  import ServerList from './components/server/ServerList.vue'
  export default {
    components: {
      'my-header': Header,
      'my-footer': Footer,
      'my-server-list': ServerList
    }
  }
</script>

<style>

</style>
