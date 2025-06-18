<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Mon Language Learning System</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar"
        aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5>
          <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
          <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
            <li class="nav-item">
              <router-link to="/" class="nav-link active">
                <i class="bi bi-house"></i> Home
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/about" class="nav-link">
                <i class="bi bi-info-circle"></i> About
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/keyboard" class="nav-link">
                <i class="bi bi-keyboard"></i> Keyboard
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>

  <!-- Main Content -->
  <router-view class="safe-zone flex-grow-1" />

  <!-- Footer -->
  <footer class="bg-dark text-white text-center py-3">
    <p class="mb-0">v0.4.1 © 2025 The Mon Language: Learning System. Developed by Barnista. All Rights Reserved.</p>
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
