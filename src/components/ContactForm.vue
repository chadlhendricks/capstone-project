<template>
<section>
  <div class="sections">

    <h1 class="headings" style="color: #00a1ff">Contact Us</h1><br>

    <!--CONTACT BUTTONS-->

    <div class="row" style="text-align: center">
      <div class='col-sm-4'>
        <i class="bi bi-geo-alt"></i><br>
        <p class="titles">Location</p>
        <p>Cape Town, South Africa  </p>
      </div>

      <div class='col-sm-4'>
        <i class="bi bi-envelope"></i><br>
        <p class="titles">Email</p>
        <p>theddit@gmail.com</p>
      </div>

      <div class='col-sm-auto col-md-auto col-lg- col-xl- col-xxl'>
        <i class="bi bi-phone"></i><br>
        <p class="titles">Call Us On</p>
        <p>+27 67 020 2386</p>
      </div>
    </div>



    <!-- END OF CONTACT BUTTONS-->

    <!-- FORM-->
   <div class="contactform col-sm-6" style="font-size: 20px;">
        <form action="https://formspree.io/f/xzbywdvz" method="POST">
          
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
            <button type="submit" class="btn btn-danger">Submit</button>
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

section {
  background: white;
  min-height: 80vh;
  padding-top: 100px
}

.titles{
  color: #00a1ff;
}

#messagebox{
  height: 100px;
}

input{
  border-radius: 25px;
}

.row{
  color: black;
  text-align: center;
}

.contactform.col-sm-6 {
    padding-top: 100px;
    margin: auto;
    width: 80%;
}

label {
  color: white;
}


/* BUTTONS AND THINGS */

.bi{
  color: #00a1ff;
  font-size: 35px;
}

.d-block{
  border-radius: 25px;
}

.w-30{
  border-radius: 50%;
  margin-bottom: 50px;
  padding-top: 50px;
}

.btn-danger {
  background: #00a1ff;
}

   
</style>