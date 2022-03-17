<template>
<Navbar/>
<ContactForm/>
<Footer/>

</template>

<script>
import Navbar from "@/components/Navbar.vue";
import ContactForm from "@/components/ContactForm.vue";
import Footer from "@/components/Footer.vue";


export default {
  name: "Home",
  components: {
    Navbar, ContactForm, Footer
  },
};
</script>
