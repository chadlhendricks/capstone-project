<template lang="">
  <section>
    <div class="row">
      <!-- Panel 1 -->
      <div class="col-md-4 mb-5" id="col1">
        <div class="panel1">
          <h1>Categories</h1>

          <ul style="color: white; text-align: center">
            <li>Art</li>
            <li>Funny</li>
            <li>Anime</li>
            <li>NSFW</li>
            <li>Sport</li>
            <li>Dank</li>
            <li>DIY</li>
          </ul>
        </div>
      </div>

      <!-- Stories -->
      <div class="col-md-4 mb-5" id="col2">
        <div class="main-stories">
          <img
            src="https://picsum.photos/200/300?random=1"
            class="logo"
            alt=""
          />
          <img
            src="https://picsum.photos/200/300?random=2"
            class="logo"
            alt=""
          />
          <img
            src="https://picsum.photos/200/300?random=3"
            class="logo"
            alt=""
          />
          <img
            src="https://picsum.photos/200/300?random=4"
            class="logo"
            alt=""
          />
          <img
            src="https://picsum.photos/200/300?random=5"
            class="logo"
            alt=""
          />
          <img
            src="https://picsum.photos/200/300?random=6"
            class="logo"
            alt=""
          />
        </div>
        <br />

        <!-- What's on your mind? -->
        <div class="main-feeling">
          <div class="container">
            <form>
              <div class="form-group">
                <h1>News Feed</h1>
                <textarea
                  class="form-control status-box"
                  rows="2"
                  placeholder="What's on your mind?"
                ></textarea>
              </div>
            </form>
            <br />

            <div class="button-group pull-right">
              <a href="#" class="btn btn-primary">Post</a>
            </div>

            <ul class="posts"></ul>
          </div>
        </div>
        <br />

        <!-- Posts -->
        <div class="main-window"></div>
      </div>

      <!-- Panel 3 -->
      <div class="col-md-4 mb-5" id="col3">
        <div class="panel3">
          <h1>Popular Posts</h1>
        </div>
        <br />
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
  padding-top: 5px;
}

.logo {
  border-radius: 17px;
  height: 160px;
  display: inline-block;
  width: 15%;
  margin: 5px;
}

.row {
  height: 100vh;
  padding-top: 35px;
  display: flex;
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
  background: rgba(128, 128, 128, 0.26);
}

.main-stories {
  height: 20vh;
  width: 100%;
  border-radius: 25px;
  background: rgba(128, 128, 128, 0.26);
  border: 1px solid gray;
}

.main-window {
  height: 80vh;
  width: 100%;
  border-radius: 25px;
  background: rgba(128, 128, 128, 0.26);
  border: 1px solid gray;
}

.panel1 {
  margin: auto;
  padding: 20px;
  height: 100%;
  width: 80%;
  border-radius: 25px;
  border: 1px solid gray;
  background: rgba(128, 128, 128, 0.26);
}

.panel3 {
  margin: auto;
  padding: 20px;
  height: 15vh;
  width: 80%;
  border-radius: 25px;
  border: 1px solid gray;
  background: rgba(128, 128, 128, 0.26);
}

.panel4 {
  margin: auto;
  height: 100%;
  width: 80%;
  border-radius: 25px;
  border: 1px solid gray;
  background: rgba(128, 128, 128, 0.26);
}

h1 {
  text-align: start;
  font-size: 20px;
  color: white;
  border: 2px white solid;
  border-left: none;
  border-right: none;
  border-top: none;
}

#col1 {
  border: 1px solid gray;
  border-top: none;
  border-left: none;
  border-bottom: none;
}

#col3 {
  border: 1px solid gray;
  border-top: none;
  border-right: none;
  border-bottom: none;
}

.btn-primary {
  background-color: #4361ee;
}

li {
  text-align: start;
}
</style>
