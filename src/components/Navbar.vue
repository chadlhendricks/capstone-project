<template lang="">
  <!-- Navbar -->
  <div class="topbar"></div>
  <nav class="navbar navbar-expand-lg">
    <!-- Container wrapper -->
    <div class="container">
      <!-- Navbar brand -->
      <a class="navbar-brand me-2" href="/">
        <img
          src="../assets/images/logo.png"
          height="25px"
          alt="MDB Logo"
          loading="lazy"
          style="margin-top: -1px"
        />
      </a>

      <!-- Toggle button -->
      <button
        class="navbar-toggler"
        type="button"
        data-mdb-toggle="collapse"
        data-mdb-target="#navbarButtonsExample"
        aria-controls="navbarButtonsExample"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i class="fas fa-bars"></i>
      </button>

      <!-- Collapsible wrapper -->
      <div class="collapse navbar-collapse" id="navbarButtonsExample">
        <!-- Left links -->
        <ul class="navbar-nav me-auto mb-2 mb-lg-0"></ul>
        <!-- Left links -->

        <div class="d-flex align-items-center">
          <a
            type="button"
            href="/contact"
            class="btn btn-link px-3 me-2"
            style="color: white"
          >
            Contact
          </a>
          <i class="bi bi-person-circle" style="color: #fb8500"></i>
        </div>
      </div>
      <!-- Collapsible wrapper -->
    </div>
    <!-- Container wrapper -->
  </nav>
  <!-- Navbar -->
</template>

<script>
export default {};
</script>

<style>
a {
  color: white;
}

.navbar {
  background: rgb(26, 26, 26);
  height: 45px;
  position: fixed;
  width: 100%;
  z-index: 200;
}

.topbar {
  height: 5px;
  background: rgb(0, 38, 255);
  position: fixed;
  width: 100%;
}
</style>
