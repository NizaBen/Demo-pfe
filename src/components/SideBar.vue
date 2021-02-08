<template>
  <div class="sidenav">
    <h3>Sales Team Demo</h3>
    <hr class="mt-3 mb-3" />
    <a><router-link to="/">Home</router-link></a>
    <a><router-link to="/commercial">Commercials</router-link></a>
    <a><router-link to="/command">Commands</router-link></a>
    <a><router-link to="/product">Product</router-link></a>
  </div>
</template>
<script>
</script>
<style>
h3 {
  color: aliceblue;
}
.sidenav {
  height: 100%;
  width: 250px;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #0185d2;
  overflow-x: hidden;
  padding-top: 20px;
}
.sidenav a {
  padding: 20px 8px 6px 16px;
  text-decoration: none;
  font-size: 22px;
  color: aliceblue;
  display: block;
}
.sidenav a:hover {
  background-color: rgba(255, 255, 255);
}

.main {
  margin-left: 160px; /* Same as the width of the sidenav */
  font-size: 28px; /* Increased text to enable scrolling */
  padding: 0px 10px;
}

@media screen and (max-height: 450px) {
  .sidenav {
    padding-top: 15px;
  }
  .sidenav a {
    font-size: 18px;
  }
}
</style>