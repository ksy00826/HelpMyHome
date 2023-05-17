<template>
  <div id="app">
    <the-header-navbar></the-header-navbar>
    <router-view/>
    <the-footer></the-footer>
  </div>
</template>

<script>
import TheHeaderNavbar from "./components/common/TheHeaderNavbar.vue";
import TheFooter from "./components/common/TheFooter.vue";

export default {
  name: "App",
  components: {
    TheHeaderNavbar,
    TheFooter,
  },
  created(){
    
    var scripts = [
      "https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js",
      // "https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js",
    ];
    scripts.forEach(script => {
      let tag = document.createElement("script");
      tag.setAttribute("src", script);
      document.head.appendChild(tag);
    });
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
