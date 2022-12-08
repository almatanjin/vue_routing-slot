<template>
    <img alt="Vue logo" src="./assets/logo.png">
    <ModifiersVue ></ModifiersVue>
  
    <HomeVue />
  
  </template>
  
  <script>
  import HomeVue from './components/HomeVue.vue';
  import ModifiersVue from './components/modifiersVue.vue';
  
  
  
  
  export default {
    name:"App",
    components:{
      ModifiersVue,
      HomeVue
  }
  }
  
  
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
  