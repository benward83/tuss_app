<template>
  <div id="home">
    <slot />
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {

  }

};
</script>

<style lang="scss">

// #home {
//   background-image: url('../assets/background.jpg');
//   object-fit: cover;
 
// }

body {
	color: #dedede;
	font-family: 'Baloo Paaji 2', cursive;
	background-size: cover;
}
</style>
