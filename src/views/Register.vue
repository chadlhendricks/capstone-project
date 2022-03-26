<template>
  <section>
    <form @submit.prevent="register" class="form neu-border">
      <h2 class="form-heading" style="color:#00a1ff">Register</h2>
      <input
        class="form-input neu-border-inset"
        type="text"
        v-model="username"
        placeholder="Name"
      />
      <input
        class="form-input neu-border-inset"
        type="email"
        v-model="email"
        placeholder="Email"
      />
      <input
        class="form-input neu-border-inset"
        type="password"
        v-model="password"
        placeholder="Password"
      />
      <button type="submit" class="form-btn neu-border">Sign up</button>
      <!-- <div class="form-social-login">
        <button class="form-btn neu-border form-social-btn">
          <i class="fab fa-google"></i>
        </button>
        <button class="form-btn neu-border form-social-btn">
          <i class="fab fa-facebook-f"></i>
        </button>
      </div> -->

      <p>
        Already a member?
        <router-link :to="{ name: 'Login' }">Sign in</router-link>
      </p>
      <p>
        Back to Home?
        <router-link :to="{ name: 'Home' }">Home</router-link>
      </p>
    </form>
  </section>
</template>

<script>

import Navbar from "@/components/Navbar.vue";

export default {
  
  name: "register",
  props: ["baseURL"],
  data() {
    return {
      username: "",
      email: "",
      password: "",
      isAdmin: false,
    };
  },
  methods: {
    register() {
      console.log("Registered Successfully");
      const person = {
        username: this.username,
        email: this.email,
        password: this.password,
      };

      console.log(person);
      fetch("https://thurs-social-media.herokuapp.com/api/auth/", {
        method: "POST",
        body: JSON.stringify(person),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
        // mode: "no-cors"
      })
        .then((response) => response.json())
        .then((json) => {
          if (json.jwt) {
            localStorage.setItem("jwt", json.jwt);
            this.$router.push({ name: "Home" });
            alert("You are now registered");
          } else {
            alert("Incorrect Credentials try again");
          }
        })
        .catch((err) => {
          alert(err);
        });
    },
  },
};
</script>
<style scoped>
section {
  background-image: url("https://picsum.photos/1920/1080");
  background-size: cover;
  height: 100vh;
}

form {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.neu-border {
  border-radius: 30px;
  background: #f5f5f56b;
  box-shadow: 8px 8px 15px #616161, -8px -8px 15px #757575;
}

/* .neu-border {
    border-radius: 30px;
    background: #ffffff73;
    box-shadow: 8px 8px 15px #403f3f, -8px -8px 15px #716f6f;} */
.neu-border-inset {
  border-radius: 30px;
  background: #818181;
  box-shadow: inset 8px 8px 15px #5a5a5a, inset -8px -8px 15px #636262;
}

.form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 40px;
  gap: 20px;
  width: 100%;
  margin-inline: auto;
  max-width: 600px;
}

.form-heading {
  text-align: center;
  text-transform: uppercase;
}

.form-input,
.form-btn {
  border: none;
  outline: none;
  padding: 20px;
}

.form-btn {
  cursor: pointer;
  transition: all 0.1s linear;
}

.form-btn:hover {
  transform: scale(1.05);
}

.form-social-login {
  display: flex;
  justify-content: space-between;
}

.form-social-btn {
  width: 45%;
  color: #333;
}
</style>
