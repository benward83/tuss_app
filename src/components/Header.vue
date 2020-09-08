<template>
  <div class="container">
    <div
      id="jumboHeaderImg"
      class="jumbotron"
    >
      <h1 id="jumboFont">
        <span
          class="fas fa-spray-can"
          aria-hidden="true"
        /> 
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
      <p id="pFont" />
    </div>
  </div>
</template>

<script>

export default {
  components: {
  },
};
</script>

<style lang="scss">
#jumboHeaderImg {
  background-image: url('../assets/background.jpg');
  background-size: 100%;
  background-position: 10%;
} 

.jumbotron {
    background-color: #A9887A;
}

#jumboFont {
   color: whitesmoke;
}

  #pFont {
      color: whitesmoke;
  }

#headingGroup span {
	color: #ea1c2c;
}

#headingGroup h1 {
	font-weight: 100;
	font-size: 4rems;
}

#buttonHover:hover {
	color: #891206;
}

#etsyColor {
    color: whitesmoke;
}

#instaColor {
    color: whitesmoke;
}

.container-fluid {
    width: 100%;
    margin: 0 0 20px;
    padding: 10px;
    overflow: hidden;
    break-inside: avoid;
}

img {
    padding: 1px;
    border: 5px solid whitesmoke ;
    background-color: rgb(175, 0, 0);
}

@media (max-width: 1200px) {
    #headingGroup h1 {
        font-weight: 100;
        font-size: 3rems;
    }
}

#iconHover:hover {
    opacity: 0.5;
    color: #891206;
}

</style>
