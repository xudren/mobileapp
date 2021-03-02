<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <keep-alive>
      <router-view />
    </keep-alive>
    <!-- <v-f /> -->
  </div>
</template>

<script>
import VF from '@/components/modal/vFunctional'

export default {
  name: 'App',
  components: {
    VF
  }
}
</script>

<style>
#app {
  height: 100%;
  width: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
