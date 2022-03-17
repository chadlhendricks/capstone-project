<template>
<section>
  <div class="wrapper">
  <div class="title">
    <h1>contact us form</h1>
  </div>
  <div class="contact-form">
    <div class="input-fields">
      <input type="text" class="input" placeholder="Name">
      <input type="text" class="input" placeholder="Email Address">
      <input type="text" class="input" placeholder="Phone">
      <input type="text" class="input" placeholder="Subject">
    </div>
    <div class="msg">
      <textarea placeholder="Message"></textarea>
      <div class="btn">send</div>
    </div>
  </div>
</div>
</section>


</template>

<script>

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Roboto');

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: none;
  font-family: 'Roboto', sans-serif;
}

section {
  height: 75vh;
  background: grey;
}

.wrapper{
  position: absolute;
  top: 43%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  max-width: 550px;
  background: white;
  padding: 30px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0,0,0,0.3);
}

.wrapper .title h1{
  color: #FB8500;
  text-align: center;
  margin-bottom: 25px;
}

.contact-form{
  display: flex;
}

.input-fields{
  display: flex;
  flex-direction: column;
  margin-right: 4%;
}

.input-fields,
.msg{
  width: 48%;
}

.input-fields .input,
.msg textarea{
  margin: 10px 0;
  background: transparent;
  border: 0px;
  border-bottom: 2px solid #FB8500;
  padding: 10px;
  color: black;
  width: 100%;
}

.msg textarea{
  height: 212px;
}

::-webkit-input-placeholder {
  /* Chrome/Opera/Safari */
  color: grey;
}
::-moz-placeholder {
  /* Firefox 19+ */
  color: grey;
}
:-ms-input-placeholder {
  /* IE 10+ */
  color: grey;
}

.btn {
    background: #FB8500;
    text-align: center;
    padding: 15px;
    border-radius: 5px;
    color: #fff;
    cursor: pointer;
    text-transform: uppercase;
}

@media screen and (max-width: 600px){
  .contact-form{
    flex-direction: column;
  }
  .msg textarea{
    height: 80px;
  }
  .input-fields,
  .msg{
    width: 100%;
  }
}

</style>
