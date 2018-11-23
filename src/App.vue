<template lang="pug">
  <!-- <div id="app">
    <img src="./assets/logo.png">
    <HelloWorld/>
    <h1>欢迎来到vue的世界</h1>
  </div> -->
  div#app
    img(src="./assets/logo.png")
    h1 Welcome from pug & sass

</template>

<script>
import HelloWorld from './components/HelloWorld'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  h1{
    color: #42b983;
    background: #42b983;
  }
}
</style>
