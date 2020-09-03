import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Shop from '../views/Shop.vue';
import Contact from '../views/Contact.vue';
import About from '../views/About.vue';
import Gallery from '../views/Gallery.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      layout: 'layoutHome'
    }
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    meta: {
      layout: 'layoutHome'
    }
  },
  {
    path: '/gallery',
    name: 'Gallery',
    component: Gallery,
    meta: {
      layout: 'layoutRest'
    }
  },
  {
    path: '/shop',
    name: 'Shop',
    component: Shop,
    meta: {
      layout: 'layoutRest'
    }
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
    meta: {
      layout: 'layoutContact'
    }
  },
  
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
