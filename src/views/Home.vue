<template>
<Navbar/>
<Landing/>
<Footer/>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Landing from "@/components/Landing.vue";
import Footer from "@/components/Footer.vue";


export default {
  name: "Home",
  components: {
    Navbar, Landing, Footer
  },
};
</script>
