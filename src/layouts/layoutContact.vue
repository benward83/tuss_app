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
// import Contact from '@/views/Contact';
export default {
  name: 'App',
  components: {
    Navbar,
    Header,
    // Contact
  }

};
</script>

<style>

</style>