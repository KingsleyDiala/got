<template>
  <nav>
    <router-link class="nav-link" to="/">Houses</router-link>
    <router-link class="nav-link" to="/person">Persons</router-link>
    <router-link class="nav-link" to="/quotes">Quotes</router-link>
  </nav>
  <router-view />
  <Footer />
</template>

<script>
import Footer from '@/components/Footer/Footer.vue';
export default {
  name: 'App',
  components: {
    Footer,
  },
};
</script>

<style>

html {
  margin: 0;
  padding: 0;
  background: linear-gradient(
    107deg,
    rgba(255, 255, 255, 0.36) 29.59%,
    rgba(255, 255, 255, 0) 160.46%
  );
}
body {
  margin: 0;
}
#app {
  font-family: Poppins, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
  background: #0a0a07;
  min-height: 100vh;
}

h1 {
  color: #fff;
  font-family: Poppins;
  font-size: 60px;
  font-style: normal;
  font-weight: 600;
  line-height: 72px; /* 115% */
  letter-spacing: 1.6px;
  text-transform: capitalize;
  text-align: start;
  margin: 0;
  padding: 0;
}

h3 {
  color: var(--White, #fff);
  text-align: center;
  font-family: Poppins;
  font-size: 30px;
  font-style: normal;
  font-weight: 500;
  line-height: 34px; /* 122.222% */
  letter-spacing: 0.72px;
  text-transform: capitalize;
}

a {
  color: inherit;
  text-decoration: none;
}

nav {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
  height: 90px;
  width: 100%;
  background: rgba(7, 25, 42, 1);
  z-index: 10;
  top: 0;
}

nav a {
  font-weight: 400;
  color: #9f9f9f;
}

nav .nav-link {
  text-decoration: none;
}

nav a.router-link-exact-active {
  color: #fff;
  text-decoration: none;
  font-weight: 600;
}
button {
  font-size: 1rem;
  color: #fff;
  font-weight: 500;
  padding: 17px 50px;
  border-radius: 50px;
  border: none;
  outline: none;
  border-radius: 999px;
  background: linear-gradient(
    107deg,
    rgba(255, 255, 255, 0.36) 29.59%,
    rgba(255, 255, 255, 0) 160.46%
  );
  backdrop-filter: blur(15px);
  text-align: center;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
}
button:hover {
  background-color: #2e3f98;
}
</style>
