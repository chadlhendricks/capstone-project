<template lang="">
  <!-- Navbar -->
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
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        </ul>
        <!-- Left links -->

        <div class="d-flex align-items-center">
          <a
            type="button"
            href="/login"
            class="btn btn-link px-3 me-2"
            style="color: white"
          >
            Login
          </a>
          <a type="button" class="btn bg-dark me-3" style="color: white">
            Sign up for free
          </a>
          <i class="bi bi-person-circle" style="color: #FB8500"></i>
          <a
            type="button"
            href="/contact"
            class="btn btn-link px-3 me-2"
            style="color: white"
          >
            Contact
          </a>
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
  background: rgba(22, 22, 22, 0.938);
}
</style>
