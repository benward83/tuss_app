<template>
  <div
    id="home"
    class="container"
  >
    <Navbar />
    <div class="row flex">
      <div class="col-lg-12">
        <div id="content">
          <h1>SayTuss</h1>
          <h3>Home Page</h3>
          <p>Saytuss is a Barcelona based Mancunian artist who refers to himself in the third person. He veers towards thick lines and bold colours inspired by japonism, post Impressionism, protest art, jazz covers and artists he finds on Instagram.</p>
          <hr>
          <button
            id="buttonHover"
            type="button"
            class="btn btn-outline-secondary fas fa-spray-can"
          >
            CHECK THE ART
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';

export default {
  components: {
    Navbar,
  },
};
</script>

<style>
body {
  background-size: cover;
  background-position: center;
  background: url("../assets/background.jpg");
}
</style>
