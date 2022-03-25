<template>
<Navbar/>
<Landing/>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Landing from "@/components/Landing.vue";

export default {
  name: "Home",
  components: {
    Navbar, Landing, 
  },
};
</script>
