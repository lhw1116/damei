<template>
  <div id="app">
    <div class="nav">
      <nav-header></nav-header>
    </div>
    <router-view />
  </div>
</template>

<script>
import NavHeader from "./components/NavHeader.vue";

export default {
  components: {
    NavHeader,
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  text-align: left;
  background: url(./assets/background.png) repeat 0 0;

  -webkit-animation: bg-scrolling-reverse 0.42s infinite; /* Safari 4+ */
  -moz-animation: bg-scrolling-reverse 0.42s infinite; /* Fx 5+ */
  -o-animation: bg-scrolling-reverse 0.42s infinite; /* Opera 12+ */
  animation: bg-scrolling-reverse 0.42s infinite; /* IE 10+ */
  -webkit-animation-timing-function: linear;
  -moz-animation-timing-function: linear;
  -o-animation-timing-function: linear;
  animation-timing-function: linear;
  @-webkit-keyframes bg-scrolling-reverse {
    100% {
      background-position: 35px 0px;
    }
  }
  @-moz-keyframes bg-scrolling-reverse {
    100% {
      background-position: 35px 0px;
    }
  }
  @-o-keyframes bg-scrolling-reverse {
    100% {
      background-position: 35px 0px;
    }
  }
  @keyframes bg-scrolling-reverse {
    100% {
      background-position: 35px 0px;
    }
  }
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
