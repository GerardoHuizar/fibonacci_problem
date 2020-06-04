<template>
  <div id="app">
    <div id="nav">
      <Navbar />
    </div>
    <router-view />
  </div>
</template>

<script>
import Navbar from './components/navbar/Component';
export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>