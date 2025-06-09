<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <!-- Main Content -->
  <router-view class="flex-grow-1" />

  <!-- Footer -->
  <footer class="bg-dark text-white text-center py-3">
    <p class="mb-0">v0.1.0 © 2025 The Mon Language: Learning System. Developed by Barnista. All Rights Reserved.</p>
  </footer>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
