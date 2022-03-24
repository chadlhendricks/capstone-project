<template>
  <div class="homepage">
    <div class="background">
      <div class="row">
        <!-- Left : Logo and Intro -->
        <div class="col-6" id="firstcol">
          <img
            src="../assets/images/logo.png"
            alt="Theddit Logo"
            style="height: 50px; margin-bottom: 20px"
          /><br />
          <h1>
            Theddit helps you connect and share with the people in your life.
          </h1>
        </div>
        <!--Right : Login Form -->
        <div class="col-6">
          <Form />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Form from "@/components/Form.vue";

export default {
  name: "Home",
  components: {
    Form,
  },
};
</script>

<style scoped>
.homepage {
  height: 80vh;
  background: url("../assets/images/background.jpg");
  background-size: cover;
}

.background {
  width: 100%;
  height: 80vh;
  backdrop-filter: blur(3px);
}

#firstcol {
  padding-top: 150px;
  text-align: start;
}

.row {
  width: 50%;
  margin: auto;
  height: 60vh;
  padding-top: 100px;
}

h1 {
  color: white;
  font-size: 25px;
}
</style>
