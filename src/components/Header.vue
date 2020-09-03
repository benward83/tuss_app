<template>
  <div class="container">
    <Navbar />
    <div
      id="jumboHeaderImg"
      class="jumbotron"
    >
      <h1 id="jumboFont">
        <span
          class="fas fa-spray-can"
          aria-hidden="true"
        /> Image Gallery
      </h1>
      <ul class="nav justify-content-end">
        <li
          id="iconHover"
          class="nav-item"
        >
          <a
            id="instaColor"
            class="nav-link fab fa-instagram"
            href="https://www.instagram.com/saytuss/?hl=en"
          />
        </li>
        <li
          id="iconHover"
          class="nav-item"
        >
          <a
            id="etsyColor"
            class="nav-link fab fa-etsy"
            href="https://www.etsy.com/shop/saytuss"
          />
        </li>
      </ul>
      <p id="pFont">
        Some examples of my work below. Check out the Insta and Etsy links for more!
      </p>
    </div>
  </div>
</template>

<script>
import Navbar from './Navbar.vue';

export default {
  components: {
    Navbar,
  },
};
</script>

<style>
</style>
