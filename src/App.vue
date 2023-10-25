<template>
  <div class="container">
  <NavComp />
  <router-view></router-view>
  </div>
  </template>
  
  <script>
  
  import NavComp from './components/Navigations.vue';
  
  export default {
    name: 'App',
    components:{
      NavComp
    }
  }
  </script>
  
  <style>
  .container {
    background-color: rgb(45,51,57);
    flex-direction: column;
    align-items: center;
    height: 100%;
    display: flex;
  }
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: rgb(182,200,184);
  }
  </style>
  