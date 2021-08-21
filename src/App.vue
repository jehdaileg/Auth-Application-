<template>
  <div id="nav">

    <HeaderLogedIn />
    
   <router-link to="/register">Register</router-link>||
   <router-link to="/loggin">Loggin</router-link>||
   <router-link to="/secret">Secret</router-link>||
  </div>
  <router-view />
</template>

<script>

import HeaderLogedIn from "./components/HeaderLogedIn.vue";
export default {

  components : {

    HeaderLogedIn 
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
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
