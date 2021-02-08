<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="col-sm-2">
          <SideBar></SideBar>
        </div>
        <div class="col-sm-10">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SideBar from "./components/SideBar";
export default {
  name: "App",
  components: {
    SideBar,
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
