<template>
 <footer class="bg-dark text-center text-white">
  <!-- Grid container -->
  <div class="container p-4 pb-0">
    <!-- Section: Social media -->
    <div class="mb-4">
      <!-- Facebook -->
      <a class="btn btn-outline-light btn-floating m-1" href="https://facebook.com" target="_blank" role="button"
        ><i class="bi bi-facebook"></i>
</a>
      <!-- Twitter -->
      <a class="btn btn-outline-light btn-floating m-1" href="https://twitter.com" target="_blank" role="button"
        ><i class="bi bi-twitter"></i></a>

      <!-- Google -->
      <a class="btn btn-outline-light btn-floating m-1" href="https://google.com" target="_blank" role="button"
        ><i class="bi bi-google"></i></a>

      <!-- Instagram -->
      <a class="btn btn-outline-light btn-floating m-1" href="https://instagram.com" target="_blank" role="button"
        ><i class="bi bi-instagram"></i></a>

      <!-- Linkedin -->
      <a class="btn btn-outline-light btn-floating m-1" href="https://linkedin.com" target="_blank" role="button"
        ><i class="bi bi-linkedin"></i></a>

      <!-- Github -->
    </div>
    <!-- Section: Social media -->
  </div>
  <!-- Grid container -->

  <!-- Copyright -->
  <div class="text-center" style="background-color: rgba(0, 0, 0, 0.2);">
    © 2022 Copyright:
    <a class="text-white" href="https://mdbootstrap.com/">Theddit</a>
  </div>
  <!-- Copyright -->
</footer>
</template>
<script>
export default {
  
}
</script>
<style scoped>
footer {
  bottom: 0;
  position: fixed;
  height: 120px;
  width: 100%;
  z-index: 203;
  background-color: rgba(128, 128, 128, 0.26)
}

.bi {
  font-size: 23px;
}

.bi:hover {
  color: #00a1ff;
}

@media screen and (max-width: 767px) {
  footer {
    display: none;
  }
}

  
</style>