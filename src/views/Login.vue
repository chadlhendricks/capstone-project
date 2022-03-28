<template>
<Navbar/>
  <section>
    <form @submit.prevent="login" class="form neu-border">
      <h2 class="form-heading" style="color: #00a1ff">Login</h2>
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
      <button type="submit" class="form-btn neu-border">Sign in</button>
      <!-- <div class="form-social-login">
        <button class="form-btn neu-border form-social-btn">
          <i class="fab fa-google"></i>
        </button>
        <button class="form-btn neu-border form-social-btn">
          <i class="fab fa-facebook-f"></i>
        </button>
      </div> -->

      <p>
        Not a member?
        <router-link :to="{ name: 'Register' }">Create an account</router-link>
      </p>
       <p>
        Back to Home?
        <router-link :to="{ name: 'Home' }">Home</router-link>
      </p>
    </form>
  </section>
  <Footer/>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";


export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  components: {
    Navbar, Footer
  },
  methods: {
    login() {
      fetch("https://thurs-social-media.herokuapp.com/api/auth/login", {
        method: "POST",
        body: JSON.stringify({
          email: this.email,
          password: this.password,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((json) => {
          if (json.jwt) {
            console.log("JSON", json);
            localStorage.setItem("jwt", json.jwt);
            localStorage.setItem("user", JSON.stringify(json.user));
            // localStorage.setItem("isAdmin", JSON.stringify(json.user.isAdmin));
            // console.log(json.user)
            this.$emit("login");
          }
          if (localStorage.getItem("jwt")) {
            this.$router.push({ name: "Home" });
          } else {
            alert("Incorrect credentials");
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
  background-color: white;
  background-size: cover;
  height: 100vh;
}

.form-heading {
  -webkit-animation: form-heading 0.45s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
	        animation: form-heading 0.45s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}

@-webkit-keyframes form-heading {
  0% {
    -webkit-transform: translateZ(0);
            transform: translateZ(0);
  }
  100% {
    -webkit-transform: translateZ(160px);
            transform: translateZ(160px);
  }
}
@keyframes slide-fwd-center {
  0% {
    -webkit-transform: translateZ(0);
            transform: translateZ(0);
  }
  100% {
    -webkit-transform: translateZ(160px);
            transform: translateZ(160px);
  }
}

form {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.neu-border {
  border-radius: 30px;
  border: solid 1px black
  
  }

/* .neu-border {
    border-radius: 30px;
    background: #ffffff73;
    box-shadow: 8px 8px 15px #403f3f, -8px -8px 15px #716f6f;} */
.neu-border-inset {
  border-radius: 30px;
  border: solid 1px black
}

.form-input {
  border: 1px solid black;
}

.form-btn {
  background: #00a1ff;
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