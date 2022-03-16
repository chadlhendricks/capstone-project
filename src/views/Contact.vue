<template>
<ContactForm/>
<Footer/>

</template>

<script>
import ContactForm from "@/components/ContactForm.vue";
import Footer from "@/components/Footer.vue";


export default {
  name: "Home",
  components: {
    ContactForm, Footer
  },
};
</script>
