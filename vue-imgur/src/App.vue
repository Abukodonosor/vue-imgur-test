<template>
  <div id="app">
    <Header title="Enter the hashtag for an image" />
    <Search placeholder="enter some hashtag..." />
    <!--
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />-->
  </div>
</template>

<script>
//import HelloWorld from "./components/HelloWorld.vue";
import Header from "./components/Header/Header.vue";
import Search from "./components/Search/Search.vue";

export default {
  name: "App",
  components: {
    //  HelloWorld,
    Header,
    Search,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
