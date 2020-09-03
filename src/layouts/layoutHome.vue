<template>
  <div>
    <Navbar />
    <Home />
    <slot />
  </div>
</template>

<script>
import Home from './views/Home.vue';
import Navbar from './components/Navbar';
export default {
  name: 'App',
  components: {
    Navbar,
    Home
  }

};
</script>

<style>

</style>