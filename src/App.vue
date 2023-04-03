<template>
  <div>
    <DisplayPage />
  </div>
  <nav class="nav-link">
    <ul>
      <li><router-link class="link" to="/">Home</router-link></li>
      <li><router-link class="link" to="/counter">Counter App</router-link></li>
      
    </ul>
  </nav>
  <router-view></router-view>
</template>

<script>
// import LandingPage from "@/components/LandingPage.vue";
// import { RouterLink, RouterView } from "vue-router";
import DisplayPage from "./components/DisplayPage.vue";

export default {
  name: "App",
  components: {
    // LandingPage,
    DisplayPage,
  },
};
</script>

<style>
body{
  margin: 0;
  padding: 0;
  font-family: 'Roboto', sans-serif;
  background-color: #3a5b7c ;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  /* -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale; */
  min-height: 100%;
  text-align: center;
  margin: 0;
  padding: 0;
}

.nav-link {
  background-color: #333;
  color: #fff;
  font-size: 20px;
  padding: 30px;
}

.nav-link ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  color: #fff;
}

.nav-link ul li {
  margin: 0 20px;
}

.nav-link ul li .link {
  color: #fff;
  text-decoration: none;
  /* padding: 10px;
  display: block; */
}

.nav-link ul li .link:hover {
  cursor: pointer;
}

</style>
