<template>
  <div>
    <nav
      id="mainNavbar"
      class="navbar navbar-dark navbar-expand-md py-0 fixed-top"
      :class="{change_color: scrollPosition > 50}"
    >
      <router-link
        href="#"
        class="navbar-brand"
        to="/"
      >
        SAYTUSS
      </router-link>
      <button
        class="navbar-toggler"
        data-toggle="collapse"
        data-target="#navLinks"
        aria-label="Toggle Navbar"
      >
        <span class="navbar-toggler-icon" />
      </button>
      <div
        id="navLinks"
        class="collapse navbar-collapse"
      >
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link
              class="nav-link"
              to="/about"
            >
              ABOUT
            </router-link>
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link"
              to="/gallery"
            >
              GALLERY
            </router-link>
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link"
              to="/shop"
            >
              SHOP
            </router-link>
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link"
              to="/contact"
            >
              CONTACT
            </router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<style lang='scss'>

#mainNavbar {
	font-size: 1.5rem;
	font-weight: 100;
}

#mainNavbar .nav-link {
	color: white;
}

#mainNavbar .nav-link:hover {
	color: #891206;
}

#mainNavbar .navbar-brand {
	color: #ea1c2c;
}

.change_color {
    background-color: black;
    transition: background 1s;
}

#iconHover:hover {
    opacity: 0.5;
    color: #891206;
}

</style>

<script>
export default {
  data() {
    return {
      scrollPosition: null,

    };
  },
  mounted() {
    window.addEventListener('scroll', this.updateScroll);
  },
  methods: {
    updateScroll() {
      this.scrollPosition = window.scrollY;
    },
  }
};
</script>
