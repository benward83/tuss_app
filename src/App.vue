<template>
  <component :is="layout">
    <router-view />
  </component>
</template>

<style>
@import './assets/style.css';
</style>

<script>

import { layoutHome, layoutRest } from '@/layouts';

export default {
  components: {
    layoutHome,
    layoutRest
  },
  computed: {
    layout() {
      return (this.$route.meta.layout || 'layoutRest');
    }
  }
};
</script>

<style>

</style>