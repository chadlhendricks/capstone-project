<template>
<section>
 <section>
    <form @submit.prevent="login" class="form neu-border">
      <h2 class="form-heading">Login</h2>
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
      <div class="form-social-login">
        <button class="form-btn neu-border form-social-btn">
          <i class="fab fa-google"></i>
        </button>
        <button class="form-btn neu-border form-social-btn">
          <i class="fab fa-facebook-f"></i>
        </button>
      </div>

      <p>
        Not a member?
        <router-link :to="{ name: 'Register' }">Create an account</router-link>
      </p>
    </form>
  </section>
</section>
</template>

<script>
export default {
}
</script>
<style>
    
</style>