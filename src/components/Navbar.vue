<template>
<div class="nav">
  <input type="checkbox" id="nav-check">
  <div class="nav-header">
    <div class="nav-title">
      <a href="/">
          <img src="../assets/images/logo.png"
          height="25px"
          alt="MDB Logo"
          loading="lazy"
          style="margin-top: -1px"
        />
      </a>
    </div>
  </div>
  <div class="nav-btn">
    <label for="nav-check">
      <span></span>
      <span></span>
      <span></span>
    </label>
  </div>
  
  <div class="nav-links">
    <router-link :to="{ path: '/login' }" style="color:#00a1ff;"><i class="bi bi-person"></i>Login</router-link>
    <router-link :to="{ path: '/register' }" style="color:#00a1ff"><i class="bi bi-person-plus"></i>Register</router-link>
    <router-link :to="{ path: '/contact' }" style="color:#00a1ff"><i class="bi bi-chat-text"></i>Contact</router-link>

    <button @click="logout()" type="button" class="btn">
      <router-link to="/">Logout</router-link>
    </button>

  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      user: JSON.parse(localStorage.getItem("user")),
      isLoggedIn: false
    };
  },
  methods: {
    logout() {
      localStorage.clear();
      alert("User logged out");
    },
  },
}  

</script>  

<style scoped>
* {
  box-sizing: border-box;
}

.bi {
  padding-top: 10px;
  padding-right: 5px;
}

.router-link-active {
  font-size: 20px;
  font-weight: bold;
  font-style: italic;
  }

a {
  color: red;
}

body {
  margin: 0px;
  font-family: 'segoe ui';
}

.nav {
  height: 60px;
  width: 100%;
  background-color: black;
  position: fixed;
  z-index: 200;
  
}

label {
  background-color: transparent;
}

.nav > .nav-header {
  display: inline;
}

.nav > .nav-header > .nav-title {
  display: inline-block;
  font-size: 22px;
  color: #fff;
  padding: 10px 10px 10px 10px;
}

.nav > .nav-btn {
  display: none;
}

.nav > .nav-links {
  display: inline;
  float: right;
  font-size: 18px;
  color: red;
}

.nav > .nav-links > a {
  display: inline-block;
  padding: 13px 10px 13px 10px;
  text-decoration: none;
  color: #efefef;
}

.nav > .nav-links > a:hover {
  background-color: #FFFFFF;
}

.nav > #nav-check {
  display: none;
}

@media (max-width:600px) {
  .nav > .nav-btn {
    display: inline-block;
    position: absolute;
    right: 0px;
    top: 0px;
  }
  .nav > .nav-btn > label {
    display: inline-block;
    width: 50px;
    height: 50px;
    padding: 13px;
  }
  .nav > .nav-btn > label:hover,.nav  #nav-check:checked ~ .nav-btn > label {
    background-color: rgba(0, 0, 0, 0.3);
  }
  .nav > .nav-btn > label > span {
    display: block;
    width: 25px;
    height: 10px;
    border-top: 2px solid #eee;
  }
  .nav > .nav-links {
    position: absolute;
    display: block;
    width: 100%;
    background-color: #333;
    height: 0px;
    transition: all 0.3s ease-in;
    overflow-y: hidden;
    top: 50px;
    left: 0px;
  }
  .nav > .nav-links > a {
    display: block;
    width: 100%;
  }
  .nav > #nav-check:not(:checked) ~ .nav-links {
    height: 0px;
  }
  .nav > #nav-check:checked ~ .nav-links {
    height: calc(100vh - 50px);
    overflow-y: auto;
  }
}

</style>

  
  
  
  
