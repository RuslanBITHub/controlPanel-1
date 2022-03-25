<template>
  <div class="page">
    <section class="section">
      <div class="side">
        <img
          class="logo"
          src="https://tequila1boy.github.io/controlPanel/img/logo.png"
          alt=""
        />
        <form class="form" @submit.prevent="this.send">
          <h1 class="l">вход</h1>
          <inputtext ref="login" text="логин"></inputtext>
          <inputpassword ref="password" text="пароль"></inputpassword>
          <button type="submit" class="button">войти</button>
        </form>
      </div>
      <div class="side side-bg">
        <img
          class="image"
          src="https://tequila1boy.github.io/controlPanel/img/clouds.jpg"
          alt=""
        />
      </div>
      <div class="popup" v-if="error.length > 0" @click.self="error = []">
        <div class="popup__wrapp">
          <span>{{ error[0] }}</span>
          <button class="button" @click="error = []">закрыть</button>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import inputpassword from "@/components/c_input-password.vue";
import inputtext from "@/components/c_input-text.vue";
export default {
  components: { inputpassword, inputtext },
  data() {
    return {
      error: [],
    };
  },
  mounted() {
    let getCookieByName = (name) => {
      let matches = document.cookie.match(
        new RegExp(
          "(?:^|; )" +
            name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") +
            "=([^;]*)"
        )
      );
      return matches ? decodeURIComponent(matches[1]) : undefined;
    };
    let token =
      getCookieByName("token") == undefined
        ? undefined
        : getCookieByName("token");
    if (
      token == undefined ||
      token == "" ||
      token == 0 ||
      token == "undefined"
    ) {
    } else {
      this.$router.push("/");
      console.log(token);
    }
  },
  methods: {
    send() {
      if (this.$refs.login.$refs.input.value != "") {
        if (this.$refs.password.$refs.input.value != "") {
          // смотрите доку к axios или напишите мне я подскажу или же можно заменить на fetch
          this.axios
            .get("https://jsonplaceholder.typicode.com/todos/1")
            .then((response) => {
              console.log(response);
              //тут вы пишите логику авторизации и сервер записывает куку токена
              if (response.status == 203) {
                this.error.push("неверный логин или пароль!");
              } else {
                document.cookie = "token=token; path=/; max-age=3600";
                this.$store.dispatch("SET_TOKEN", "token");
                this.$store.dispatch("SET_USERDATA", {
                  name: "name",
                  avatar: undefined,
                  level: 0,
                });
                this.$router.push("/");
              }
            });
        } else {
          this.error.push("Поле пароль пустое!");
        }
      } else {
        this.error.push("Поле логин пустое!");
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.section {
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  .popup {
    background: rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(4px);
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    display: grid;
    place-items: center;
    .popup__wrapp {
      padding: 64px;
      background: var(--light-color);
      border-radius: 8px;
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      span {
        margin-bottom: 48px;
      }
      .button {
        margin: 0;
      }
    }
  }
  .side {
    position: relative;
    display: grid;
    &.side-bg {
      background: #000000;
    }
    .image {
      width: 100%;
      height: 100%;
      object-fit: cover;
      pointer-events: none;
      opacity: 0.98;
    }
    .logo {
      height: 48px;
      position: absolute;
      top: 96px;
      left: 50%;
      transform: translateX(-50%);
    }
  }
  @media (max-width: 1030px) {
    grid-template-columns: 1fr;
    .side:last-child {
      display: none;
    }
  }
  .form {
    justify-self: center;
    align-self: center;
    h1 {
      text-align: center;
      margin-bottom: 8px;
    }
  }
}
</style>
