<template lang="">
   <form method="post" action="">

  <h3 id="logo">Log In</h3>

  <label for="username">Username</label>
  <input type="text" id="username" name="username" placeholder="Type in your username.." autocomplete="off" required />

  <label for="password">Password</label>
  <input type="password" id="password" name="password" placeholder="Enter your password.." autocomplete="off" required />

  <p class="forgot">New user?</p>
  <a class="register" href="#">Register</a>

  <input type="submit" name="submit" value="Log In" />

</form>
</template>
<script>
export default {
    
}
</script>
<style scoped>

@import url(https://fonts.googleapis.com/css?family=Lily+Script+One);

body {
  margin:0;
  font-family:arial,tahoma,sans-serif;
  font-size:12px;
  font-weight:normal;
  direction:ltr;
  background:white;
}

form {
  margin:10% auto 0 auto;
  padding:30px;
  width:400px;
  height:auto;
  overflow:hidden;
  background:white;
  border-radius:10px;
}

form label {
  font-size:14px;
  color:darkgray;
  cursor:pointer;
}

form label,
form input {
  float:left;
  clear:both;
}

form input {
  margin:15px 0;
  padding:15px 10px;
  width:100%;
  outline:none;
  border:1px solid #bbb;
  border-radius:20px;
  display:inline-block;
  -webkit-box-sizing:border-box;
     -moz-box-sizing:border-box;
          box-sizing:border-box;
    -webkit-transition:0.2s ease all;
     -moz-transition:0.2s ease all;
      -ms-transition:0.2s ease all;
       -o-transition:0.2s ease all;
          transition:0.2s ease all;
}

form input[type=text]:focus,
form input[type="password"]:focus {
  border-color:cornflowerblue;
}

input[type=submit] {
  padding:15px 50px;
  width:auto;
  background: #FB8500;
  border:none;
  color:white;
  cursor:pointer;
  display:inline-block;
  float:right;
  clear:right;
  -webkit-transition:0.2s ease all;
     -moz-transition:0.2s ease all;
      -ms-transition:0.2s ease all;
       -o-transition:0.2s ease all;
          transition:0.2s ease all;
}

input[type=submit]:hover {
  opacity:0.8;
}

input[type="submit"]:active {
  opacity:0.4;
}

.forgot {
  float:left;
  clear:left;
  color:grey;
  text-decoration:none;
}

.register {
  float:left;
  clear:left;
  color:cornflowerblue;
  text-decoration:none;
}

.register:hover {
  color:darkgray;
}

#logo {
  margin:0 auto;
  width:200px;
  font-family:'Lily Script One', cursive;
  font-size:60px;
  font-weight:bold;
  text-align:center;
  color:lightgray;
  -webkit-transition:0.2s ease all;
     -moz-transition:0.2s ease all;
      -ms-transition:0.2s ease all;
       -o-transition:0.2s ease all;
          transition:0.2s ease all;
}

#logo:hover {
  color: #FB8500;
}
    
</style>