<template>
  <div class="page padding">
    <headercomponent></headercomponent>
    <navcomponent></navcomponent>
    <div class="page__wrapp">
      <div class="page__body">
        <h1 class="l">Клиент id: {{ this.$store.getters.getClientData.id }}</h1>
        <div class="nav__client">
          <router-link class="link" to="/client/info">info</router-link>
          <router-link class="link" to="/client/userssql"
            >users sql</router-link
          >
          <router-link class="link" to="/client/usersrdp"
            >users rdp</router-link
          >
          <router-link class="link" to="/client/base">base</router-link>
          <router-link class="link" to="/client/web">web</router-link>
          <router-link class="link" to="/client/update">update</router-link>
          <router-link class="link" to="/client/interaction"
            >interaction</router-link
          >
          <router-link class="link" to="/disk">disk</router-link>
        </div>
        <div class="button__container">
          <button class="button">Список активных пользователей</button>
          <button class="button">Добавить пользователя</button>
          <button class="button">Урезать пользователя</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import headercomponent from "@/components/c_header.vue";
import navcomponent from "@/components/c_nav.vue";
export default {
  components: { headercomponent, navcomponent },
  data() {
    return {};
  },
  mounted() {
    if (this.$store.getters.getUserData.level < 0) {
      //тут нужно указать минимальный уровень доступа
      this.$router.push("/");
    }
  },
  methods: {},
};
</script>
<style lang="scss" scoped>
.page {
  display: grid;
  .page__wrapp {
    width: 100%;
    margin-top: 152px;
    display: flex;
    flex-direction: column;
  }
  .page__body {
    width: 100%;
  }
  .nav__client {
    margin: 48px 0;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    padding: 0 48px;
    .link {
      margin: 12px;
      &.router-link-exact-active {
        color: var(--second-color);
      }
    }
  }
}
.button__container {
  display: flex;
  flex-wrap: wrap;
  padding: 0 48px;
}
.button {
  background: var(--light-color);
  color: var(--dark-color);
  min-width: 100px;
  width: auto;
  padding: 0px 24px;
  margin: 12px;
  @media (min-width: 700px) {
    &:hover {
      transition: 0.2s;
      background: var(--main-color);
      color: var(--light-color);
    }
  }
}
</style>
