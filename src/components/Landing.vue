<template lang="">
  <section>
    <div class="row">
      <div class="col-4" id="col1">
        <div class="window"></div>
      </div>

      <div class="col-4" id="col2">
        <div id="main-stories">
          <div class="col-3"><img src="@/assets/logo.png" class="logo" alt=""></div>
          <div class="col-3"><img src="@/assets/logo.png" class="logo" alt=""></div>
          <div class="col-3"><img src="@/assets/logo.png" class="logo" alt=""></div>
          <div class="col-3"><img src="@/assets/logo.png" class="logo" alt=""></div>
        </div>

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

        <div class="main-window"></div>
      </div>

      <div class="col-4" id="col3">
        <div class="window"></div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>

.logo {
  background: grey;
  border-radius: 25px;
  height: 100px;
  display: inline-block;
}

#main-stories {}

.row {
  height: 100vh;
  margin-top: 20px;
}

.container {
  padding-top: 25px;
}

.main-feeling {
  margin: auto;
  height: 20vh;
  width: 100%;
  border-radius: 25px;
  background: rgba(128, 128, 128, 0.185);
}

.main-stories {
  margin-bottom: 25px;
  height: 20vh;
  width: 100%;
  border-radius: 25px;
  background: rgba(128, 128, 128, 0.185);
}

.main-window {
  margin-top: 50px;
  height: 80vh;
  width: 100%;
  border-radius: 25px;
  background: rgba(128, 128, 128, 0.185);
}

.window {
  margin: auto;
  height: 100vh;
  width: 80%;
  border-radius: 25px;
  background: rgba(128, 128, 128, 0.418);
}
</style>
