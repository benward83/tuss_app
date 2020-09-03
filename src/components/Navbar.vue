<template>
  <div>
    <nav
      id="mainNavbar"
      class="navbar navbar-dark navbar-expand-md py-0 fixed-top"
    >
      <a
        href="#"
        class="navbar-brand"
        to="/"
      >SAYTUSS</a>
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
            <a
              href
              class="nav-link"
            >ABOUT</a>
          </li>
          <li class="nav-item">
            <a
              href
              class="nav-link"
              to="/gallery"
            >GALLERY</a>
          </li>
          <li class="nav-item">
            <a
              href
              class="nav-link"
            >SHOP</a>
          </li>
          <li class="nav-item">
            <a
              href
              class="nav-link"
            >CONTACT</a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<style>
</style>

<script>
export default {};
</script>
