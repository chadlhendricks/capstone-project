<template>
<Landing/>
<Footer/>

</template>

<script>
import Landing from "@/components/Landing.vue";
import Footer from "@/components/Footer.vue";


export default {
  name: "Home",
  components: {
    Landing, Footer
  },
};
</script>
