<template>
  <component :is="layout">
    <router-view />
  </component>
</template>

<style>
@import './assets/style.css';
</style>

<script>

export default {
  components: {
  },
  computed: {
    layout() {
      return (this.$route.meta.layout || 'default') + '-layout';
    }
  }
};
</script>
