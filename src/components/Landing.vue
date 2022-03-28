<template lang="">
  <section>
    <div class="row">
      <!-- Panel 1 -->
      <div class="col-md-4 mb-5" id="col1">
        <div class="panel1">
          <h1>Categories</h1>
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
            id="lastone"
            alt=""
          />
        </div>
        <br />

        <!-- What's on your mind? -->
        <div class="main-feeling">
          <div class="container" style="padding-top: 30px">
            <form>
              <div
                style="display: inline-block; vertical-align: top; width: 100%"
              >
                <img
                  src="https://picsum.photos/50/50?random=5"
                  style="border-radius: 50%; display: inline-block"
                  alt=""
                />

                <div style="display: inline-block; vertical-align: top">
                  <textarea
                    style="resize: none"
                    class="form-control status-box"
                    rows="2"
                    placeholder="What's on your mind?"
                  ></textarea>
                </div>
              </div>
            </form>
            <br />

            <div class="button-group pull-right">
              <a href="#" class="btn btn-primary">Post</a>
            </div>
          </div>
        </div>
        <br />

        <!-- Posts -->
        <div class="main-window" v-if="posts">
          <!--Start of Card  -->
          <div
            class="card"
            v-for="post in posts"
            :key="posts.UserId"
            data-mdb-toggle="animation"
            data-mdb-animation-reset="true"
            data-mdb-animation="slide-out-right"
          >
            <div >
              <img :src="post.img" class="card-img-top hover-zoom" alt="No Image" />
            </div>

            <div class="card-body">
              <!-- <img :src="post.user.profilePicture" class="profilepics" alt="">
              <h5 class="card-title" v-if="post.user">{{ post.user.username }}</h5> -->
              <p class="card-text">{{ post.desc }}</p>
              <p class="card-text">{{ post.likes.length }} likes</p>
            </div>
            <div>
              <div>
                <div style="padding-left: 20px; padding-right: 20px; float: left; color: #00a1ff; font-weight: bold; font-size: 30px"><i class="bi bi-hand-thumbs-up"></i></div>
                <div style="float: left; color: #00a1ff; font-weight: bold; font-size: 30px"><i class="bi bi-chat"></i></div>
              </div>
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
        data.forEach(async (item) => {
          const response = await fetch(
            "https://thurs-social-media.herokuapp.com/api/posts" + item.userId
          );
          const person = await response.json();
          console.log(person);
          item.user = person;
        });
        console.log(data);
        this.posts = data;
      });
  },
};
</script>

<style scoped>

i:hover {
  font-size: 35px;
  font-weight: bold;
}

section {
  background: white;
  min-height: 310vh;
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
  padding-top: 80px;
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
  background: rgba(182, 182, 182, 0.26);
}

.main-stories {
  height: 20vh;
  width: 100%;
  border-radius: 10px;
  background: rgba(182, 182, 182, 0.26);
}

.main-window {
  min-height: 80vh;
  width: 100%;
  border-radius: 10px;
}

.panel1 {
  margin: auto;
  padding: 20px;
  height: 100%;
  width: 32.7%;
  border-radius: 10px;
  background: rgba(182, 182, 182, 0.26);
  position: fixed;
}

.panel3 {
  margin: auto;
  padding: 20px;
  height: 15vh;
  width: 80%;
  border-radius: 10px;
  position: fixed;
  background: rgba(182, 182, 182, 0.26);
}

.panel4 {
  margin: auto;
  height: 100%;
  width: 80%;
  border-radius: 10px;
  margin-top: 10%;
  position: fixed;
  background: rgba(182, 182, 182, 0.26);
}

h1 {
  text-align: start;
  font-size: 20px;
  border-left: none;
  border-right: none;
  border-top: none;
  color: #00a1ff;
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
  background-color: #00a1ff;
}

li {
  text-align: start;
}

textarea {
  border: none;
  background: white;
  border-radius: 25px;
  height: 35px;
  width: 480px;
}

::placeholder {
  color: black;
}

@media screen and (max-width: 767px) {
  .panel1 {
    display: none;
  }
  .main-stories {
    height: 200px;
  }

   .main-feeling {
    height: 200px;
  }

  .panel3 {
    display: none;
  }
  #lastone {
    display: none;
  }
  .logos {
    height: 50px;
  }
  .container {
    padding-top: 0px;
  }
  .main-window {
    padding-top: 30px;
    margin: auto;
    width: 90%;
  }
}

@media screen and (max-width: 1845px) {
  #lastone {
    display: none;
  }
}
</style>
