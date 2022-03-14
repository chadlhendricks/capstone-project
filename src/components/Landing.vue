<template lang="">
  <section>
    <div class="row">

      <!-- Panel 1 -->
      <div class="col-4" id="col1">
        <div class="panel1"></div>
      </div>

      <!-- Stories -->
      <div class="col-4" id="col2">
        <div class="main-stories">
          <img src="https://picsum.photos/200/300?random=1" class="logo" alt="">
          <img src="https://picsum.photos/200/300?random=2" class="logo" alt="">
          <img src="https://picsum.photos/200/300?random=3" class="logo" alt="">
          <img src="https://picsum.photos/200/300?random=4" class="logo" alt="">
          <img src="https://picsum.photos/200/300?random=5" class="logo" alt="">
          <img src="https://picsum.photos/200/300?random=6" class="logo" alt="">
        </div>

      <!-- What's on your mind? -->
        <div class="main-feeling">
          <div class="container">
            <form>
              <div class="form-group">
                <textarea
                  class="form-control status-box"
                  rows="2"
                  placeholder="What's on your mind?"
                ></textarea>
              </div>
            </form>

            <div class="button-group pull-right">
              <p class="counter">140</p>
              <a href="#" class="btn btn-primary">Post</a>
            </div>

            <ul class="posts"></ul>
          </div>
        </div>

      <!-- Posts -->
        <div class="main-window"></div>
      </div>

      <!-- Panel 3 -->
      <div class="col-4" id="col3">
        <div class="panel3"></div>
        <div class="panel4"></div>

      </div>

    </div>

  </section>
</template>

<script>
export default {};
</script>

<style scoped>

section {
  background: black;
  height: 160vh;
}

.main-stories {
  background: red;
  padding-top: 5px
  }

.sidepanels {
  border: 2px solid red;
}

.logo {
  background: grey;
  border-radius: 17px;
  height: 160px;
  display: inline-block;
  width: 15%;
  margin: 5px;
}

.row {
  height: 100vh;
  padding-top: 35px;
}

.container {
  padding-top: 25px;
}

.main-feeling {
  margin: auto;
  height: 20vh;
  width: 100%;
  border-radius: 25px;
  border: 1px solid gray;
  background: rgba(128, 128, 128, 0.185);
}

.main-stories {
  margin-bottom: 25px;
  height: 20vh;
  width: 100%;
  border-radius: 25px;
  background: rgba(128, 128, 128, 0.185);
  border: 1px solid gray;
}

.main-window {
  margin-top: 50px;
  height: 80vh;
  width: 100%;
  border-radius: 25px;
  background: rgba(128, 128, 128, 0.185);
    border: 1px solid gray;

}

.panel1 {
  margin: auto;
  height: 100%;
  width: 80%;
  border-radius: 25px;
  border: 1px solid gray;
  background: rgba(128, 128, 128, 0.185);
}

.panel3 {
  margin: auto;
  height: 20vh;
  width: 80%;
  border-radius: 25px;
  border: 1px solid gray;
  background: rgba(128, 128, 128, 0.185);
}

.panel4 {
  margin: auto;
  height: 100%;
  width: 80%;
  padding-top: 25px;
  border-radius: 25px;
  border: 1px solid gray;
  background: rgba(128, 128, 128, 0.185);
}

</style>
