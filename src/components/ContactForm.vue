<template>
<section>
  <div class="sections">

    <h1 class="headings">Contact Me</h1><br>

    <!--CONTACT BUTTONS-->

    <div class="row" id="buttanim" style="text-align: center">
      <div class='col-md-4 mb-5'>
        <i class="bi bi-geo-alt"></i><br>
        <p class="titles">Location</p>
        <p>Cape Town, South Africa  </p>
      </div>

      <div class='col-md-4 mb-5'>
        <i class="bi bi-envelope"></i><br>
        <p class="titles">Email</p>
        <p>chadlhendricks@gmail.com</p>
      </div>

      <div class='col-md-4 mb-5'>
        <i class="bi bi-phone"></i><br>
        <p class="titles">Call Me On</p>
        <p>+27 67 020 2386</p>
      </div>
    </div>



    <!-- END OF CONTACT BUTTONS-->

       <!-- <div class="contactform col-sm-6" style="font-size: 20px;"> -->

       <!-- <form action="https://formspree.io/f/xzbywdvz" method="POST"> -->



    <!-- FORM  -->
   <div class="contactform col-sm-6" style="font-size: 20px;">

        <form @submit.prevent="handleSubmit">
          
          <div class="row">
            <div class="mb-3 col-6">
              <input type="text" class="form-control" id="fullname" name="fullname" aria-describedby="emailHelp" required="" placeholder="Name*">
            </div>

            <div class="mb-3 col-6">
              <input type="email" class="form-control" id="exampleInputEmail1" name="emailaddress" aria-describedby="emailHelp" required="" placeholder="Email Address*">
            </div>
          </div><br>

          <div class="mb-3">
              <input type="textarea" class="form-control" id="subjectbox" name="subject" required="" placeholder="Subject*">
          </div><br>

           <div class="mb-3">
              <input type="textarea" class="form-control" id="messagebox" name="message" required="" placeholder="Your Message*">
          </div><br>

          <div class="mb-3 form-check" style="text-align:center">
            <button type="submit" class="btn btn-warning">Submit</button>
            <button type="reset" class="btn btn-danger">Reset</button>

          </div>
  
        </form>

    </div>
    <!-- END OF FORM -->

      </div>
</section>


</template>


<script>




</script>

<style scoped>

.sections {
    background-color: black;
    height: 120vh;
}

.titles{
  color: #fca311ff;
  font-size: 20px;
}

#messagebox{
  height: 100px;
}

input{
  border-radius: 25px;
  border: none;
}

.row{
  color: white;
}

.contactform.col-sm-6 {
    padding-top: 100px;
    margin: auto;
    width: 80%;
}

label {
  color: white;
}

.form-control {
  height: 45px
}


/* BUTTONS AND THINGS */

.bi{
  color: crimson;
  font-size: 50px;
}

.d-block{
  border-radius: 25px;
}

.w-30{
  border-radius: 50%;
  margin-bottom: 50px;
  padding-top: 50px;
}

</style>