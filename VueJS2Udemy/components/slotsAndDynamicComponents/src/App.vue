<template>
<div class="container">
  <div class="row">
    <div class="col-12">
      <button class="btn btn-primary" @click="selectedComponent='app-quote'">Quote</button>
      <button class="btn btn-primary" @click="selectedComponent='app-new'">New</button>
      <button class="btn btn-primary" @click="selectedComponent='app-author'">Author</button>
      <hr>
      <!-- keep alive will prevent dynamic components from being destroyed when switching views -->
      <keep-alive>
        <component :is="selectedComponent">
          <!-- this html will get passed to the app-quote for rendering using a slot, now you can set the data on the elements here -->
          <h2 slot="title">{{ title }}</h2>
          <p>A Quote</p>
        </component>
      </keep-alive>
    </div>
  </div>
</div>
</template>

<script>
import Quote from './components/Quote';
import New from './components/New';
import Author from './components/Author';

export default {
  data: function(){
    return {
      title: 'My Quotes',
      selectedComponent: 'app-quote'
    }
  },
  components: {
    'app-quote': Quote,
    'app-new': New,
    'app-author': Author
  }
}
</script>

<style>
/* this apply but can be overwritten by the child */
h2 {
  color: firebrick;
}
</style>
