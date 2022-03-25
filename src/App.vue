<template>
  <div class="content mf m">
    <!-- <router-link to="/">page</router-link> -->
    <main class="main">
      <router-view />
    </main>
  </div>
</template>
<script>
export default {
  mounted() {
    this.getCookie();
    setInterval(() => {
      // каждые 30 секунд сайт проверяет есть ли у пользователя куки, зачем нужно? чтобы автоматически выходило из аккаунта спустя вермя жизни куки
      this.getCookie();
    }, 30000);
  },
  methods: {
    getCookie() {
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
        this.$router.push("/auth/");
      } else {
        this.axios
          .get("https://jsonplaceholder.typicode.com/todos/1")
          .then((response) => {
            console.log(response);
            //тут вы пишите логику авторизации и проверки токена
            this.$store.dispatch("SET_TOKEN", "token");
            this.$store.dispatch("SET_USERDATA", {
              name: "name",
              avatar: undefined,
              level: 0,
            });
          });
      }
    },
  },
};
</script>

<style lang="scss">
@font-face {
  font-family: "Mont";
  src: url("https://tequila1boy.github.io/controlPanel/fonts/Mont-Regular.ttf");
}
:root {
  --main-color: #4079fa;
  --second-color: #e50f81;
  --third-color: #4c4c4c;
  --bg-color: #f5f5f5;
  --light-color: rgba(255, 255, 255, 0.9);
  --dark-color: #01000d;
}
* {
  padding: 0;
  margin: 0;
  border: 0;
  scroll-behavior: smooth;
  color: inherit;
}
*,
*:before,
*:after {
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
:focus,
:active {
  outline: none;
}
a:focus,
a:active,
a {
  outline: none;
  color: inherit;
}
nav,
footer,
header,
aside {
  display: block;
}
html,
body {
  height: 100%;
  width: 100%;
  font-size: 100%;
  line-height: 1;
  font-size: 14px;
  -ms-text-size-adjust: 100%;
  -moz-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
}
input,
button,
textarea {
  font-family: inherit;
}
input::-ms-clear {
  display: none;
}
button {
  cursor: pointer;
}
button::-moz-focus-inner {
  padding: 0;
  border: 0;
}
a,
a:visited {
  text-decoration: none;
}
a:hover {
  text-decoration: none;
}
ul li {
  list-style: none;
}
img {
  vertical-align: top;
  object-fit: contain;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: inherit;
  font-weight: inherit;
}
body {
  overflow-x: hidden;
  overflow-y: overlay;
}
@media (min-width: 700px) {
  ::-webkit-scrollbar {
    width: 30px;
  }
  ::-webkit-scrollbar-track {
    border-radius: 100px;
    background-clip: border-box;
  }
  ::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.2);
    background-clip: padding-box;
    border: 13px solid transparent;
    border-radius: 100px;
  }
  ::-webkit-scrollbar-button,
  ::-webkit-scrollbar-track-piece {
    background: transparent;
  }
  ::-webkit-scrollbar-corner {
    background: transparent;
  }
}
/////////////////////////////////////////////////////////
// font sizes
.s {
  @media (min-width: 700px) {
    font-size: 16px;
    line-height: 20px;
  }
  @media (max-width: 700px) {
    font-size: 13.33px;
    line-height: 17.33px;
  }
}
.m {
  @media (min-width: 700px) {
    font-size: 23.04px;
    line-height: 27.04px;
  }
  @media (max-width: 700px) {
    font-size: 19.2px;
    line-height: 23.2px;
  }
}
.l {
  @media (min-width: 700px) {
    font-size: 33.18px;
    line-height: 37.18px;
  }
  @media (max-width: 700px) {
    font-size: 27.65px;
    line-height: 31.65px;
  }
}
.xl {
  @media (min-width: 700px) {
    font-size: 47.77px;
    line-height: 51.77px;
  }
  @media (max-width: 700px) {
    font-size: 39.81px;
    line-height: 43.81px;
  }
}
/////////////////////////////////////////////////////////
// main and second fonts
.mf {
  font-family: "Mont", sans-serif;
}
.sf {
  font-family: "Roboto", sans-serif;
}
/////////////////////////////////////////////////////////
// settings
.link {
  color: var(--main-color);
  transition: 0.2s;
  &.nuxt-link-exact-active {
    color: var(--dark-color);
  }
  @media (min-width: 700px) {
    &:hover {
      color: var(--second-color);
    }
  }
}
.main {
  flex: 1 0 auto;
  min-height: 100vh;
}
.content {
  display: flex;
  flex-direction: column;
  width: 100vw;
  position: relative;
  background: var(--bg-color);
  overflow: hidden;
}
.page {
  width: 100%;
  min-height: 100vh;
}
.padding {
  @media (min-width: 700px) {
    padding: 0 72px 0 72px;
  }
  @media (min-width: 1400px) {
    padding: 0 144px 0 144px;
  }
  @media (max-width: 700px) {
    padding: 0 72px 0 72px;
  }
}
.button {
  height: 56px;
  display: grid;
  place-items: center;
  background: var(--second-color);
  color: var(--light-color);
  transition: 0.4s;
  border-radius: 8px;
  font-size: 16px;
  width: 272px;
  line-height: 16px;
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.05);
  margin-top: 24px;
  @media (min-width: 700px) {
    &:hover {
      transition: 0.2s;
      background: var(--main-color);
      color: var(--light-color);
    }
  }
}
.input {
  padding: 0 24px;
  margin-bottom: 24px;
  height: 56px;
  background: white;
  color: var(--dark-color);
  transition: 0.4s;
  border-radius: 8px;
  font-size: 16px;
  width: 272px;
  line-height: 16px;
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.05);
}
.input-wrapp {
  position: relative;
  margin-top: 40px;
  width: 272px;
  height: 56px;
  .input {
    margin: 0px;
  }
  .text {
    position: absolute;
    top: 50%;
    left: 18px;
    font-size: 18px;
    line-height: 18px;
    pointer-events: none;
    transform: translateY(-50%);
    height: 18px;
  }
  .active {
    border: 2px solid var(--second-color);
  }
}
.password {
  position: absolute;
  height: 32px;
  left: 18px;
  top: 50%;
  transform: translateY(-50%);
  width: calc(100% - 32px);
  background: var(--bg-color);
  display: flex;
  align-items: center;
  pointer-events: none;
  span {
    display: block;
    height: 8px;
    width: 8px;
    background: var(--dark-color);
    border-radius: 50%;
    margin-left: 4px;
  }
}
</style>