<template>
  <nav class="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <img src="@/assets/logo.png" alt="Mon Language Logo" width="30" height="30"
          class="d-inline-block align-text-top">
        Mon Language Learning System
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li class="nav-item">
            <router-link to="/" :class="['nav-link', { active: $route.path === '/' }]">
              <i class="bi bi-house"></i> Home
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about" :class="['nav-link', { active: $route.path === '/about' }]">
              <i class="bi bi-info-circle"></i> About
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/keyboard" :class="['nav-link', { active: $route.path === '/keyboard' }]">
              <i class="bi bi-keyboard"></i> Keyboard
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <!-- Main Content -->
  <router-view class="safe-zone flex-grow-1" />

  <!-- Footer -->
  <footer class="bg-dark text-white text-center py-3">
    <p class="mb-0">v0.4.2 © 2025 The Mon Language: Learning System. Developed by Barnista. All Rights Reserved.</p>
  </footer>
</template>

<style>
.safe-zone {
  padding-top: 56px;
  /* Adjust based on your navbar height */
  min-height: calc(100vh - 56px);
  /* Ensure footer is at the bottom */
}
</style>
