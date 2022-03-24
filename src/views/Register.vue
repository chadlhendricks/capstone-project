<template>
  <div id="app">
    <form @submit.prevent="login">
      <div>
        <label for="username">username</label>
        <input name="username" v-model="username" placeholder="username">
      </div>
          <div>
        <label for="email">email</label>
        <input name="email" v-model="email" placeholder="email" type="email">
      </div>
      <div>
        <label for="password">password</label>
        <input name="password" v-model="password" placeholder="password" type="password">
      </div>
      <input type="submit" value="register">
    </form>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      username: "",
      email: "",
      password: ""
    };
  },
  methods: {
    async login() {
      const { username, email, password,} = this;
      const res = await fetch(
        "http://localhost:4000/api/auth/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            username,
            email,
            password,
          })
        }
      );
      const data = await res.json();
      console.log(data);
    }
  }
};
</script>