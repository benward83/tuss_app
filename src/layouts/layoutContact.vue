<template>
  <div>
    <Navbar />
    <Header />
    <slot />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar';
import Header from '@/components/Header';

export default {
  name: 'App',
  components: {
    Navbar,
    Header,

  }

};
</script>

<style>

</style>