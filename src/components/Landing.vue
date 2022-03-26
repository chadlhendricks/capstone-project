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

      <!-- Panel2 -->

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
       
          </div>
        </div>
        <br />

        <!-- Posts -->
        <div class="main-window" v-if="posts">
          <!--Start of Card  -->
          <div class="card" v-for="post in posts" :key="posts.UserId">
            <img :src="post.img" class="card-img-top" alt="No Image" />
            <div class="card-body">
              <!-- <img :src="post.user.profilePicture" class="profilepics" alt=""> -->
              <!-- <h5 class="card-title" v-if="post.user">{{ post.user.username }}</h5> -->
              <p class="card-text">{{ post.desc }}</p>
              <p class="card-text">{{ post.likes.length }} likes</p>
              
            </div>
          </div>
          <!--End of Card  -->
        </div>
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
export default {
  data() {
    return {
      posts: null,
    };
  },
  mounted() { 
    fetch("https://thurs-social-media.herokuapp.com/api/posts", {
      method: "GET",
      header: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        data.forEach(async item => {
          const response =  await fetch("https://thurs-social-media.herokuapp.com/api/posts" + item.userId)
          const person = await response.json()
          console.log(person)
          item.user = person
        })
        console.log(data)
        this.posts = data;
      });
  },
};
</script>

<style scoped>
section {
  background: #DAE0E6;
  min-height: 400vh;
}

.profilepics {
  border-radius: 50%;
  height: 50px;
  width: 50px;
  float: left;
}

.card {
  margin-top: 20px;
}

.card-title {
    text-align: start;
}

.card-text {
  text-align: start;
}

.main-stories {
  padding-top: 5px;
}

.logo {
  border-radius: 10px;
  height: 170px;
  display: inline-block;
  width: 15%;
  margin: 5px;
}

.logo:hover {
  transform: scale(1.09);
}

.row {
  height: 100vh;
  padding-top: 60px;
  display: flex;
}

.container {
  padding-top: 25px;
}

.main-feeling {
  margin: auto;
  height: 20vh;
  width: 100%;
  border-radius: 10px;
  background: rgba(128, 128, 128, 0.26);
}

.main-stories {
  height: 20vh;
  width: 100%;
  border-radius: 10px;
  background: rgba(128, 128, 128, 0.26);
}

.main-window {
  min-height: 80vh;
  width: 100%;
  border-radius: 10px;
}

.panel1 {
  margin: auto;
  padding: 20px;
  height: 1;
  width: 100%;
  border-radius: 10px;
  background: rgba(128, 128, 128, 0.26);
}

.panel3 {
  margin: auto;
  padding: 20px;
  height: 15vh;
  width: 80%;
  border-radius: 10px;
  position: fixed;
  background: rgba(128, 128, 128, 0.26);
}

.panel4 {
  margin: auto;
  height: 30%;
  width: 80%;
  border-radius: 10px;
  margin-top: 10%;
  position: fixed;
  background: rgba(128, 128, 128, 0.26);
}

h1 {
  text-align: start;
  font-size: 20px;
  color: white;
  border-left: none;
  border-right: none;
  border-top: none;
}

/* #col1 {
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
} */

.btn-primary {
  background-color: #fb8500;
}

li {
  text-align: start;
}

textarea {
  border: none;
  background: grey;
  border-radius: 25px;
  height: 35px;
}

::placeholder {
  color: whitesmoke;
}
</style>
