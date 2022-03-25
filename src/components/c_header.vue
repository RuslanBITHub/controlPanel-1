<template>
  <header class="header padding">
    <img
      class="logo"
      src="https://tequila1boy.github.io/controlPanel/img/logo.png"
      alt=""
    />
    <form class="search" @submit.prevent="this.search">
      <input class="input" type="text" placeholder="client id / инн" />
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        @click="this.search"
      >
        <path
          d="M10.3636 3C8.90721 3 7.48354 3.43187 6.2726 4.24099C5.06167 5.05011 4.11786 6.20015 3.56052 7.54567C3.00319 8.89119 2.85737 10.3718 3.14149 11.8002C3.42562 13.2286 4.12693 14.5406 5.15675 15.5704C6.18657 16.6003 7.49863 17.3016 8.92703 17.5857C10.3554 17.8698 11.836 17.724 13.1815 17.1667C14.527 16.6093 15.6771 15.6655 16.4862 14.4546C17.2953 13.2437 17.7272 11.82 17.7272 10.3636C17.7271 8.41069 16.9512 6.5378 15.5703 5.15688C14.1894 3.77597 12.3165 3.00012 10.3636 3V3Z"
          stroke="black"
          stroke-width="2"
          stroke-miterlimit="10"
        />
        <path
          d="M15.8573 15.8574L21 21"
          stroke="black"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="round"
        />
      </svg>
    </form>
    <div class="account">
      <span class="s">{{ this.$store.getters.getUserData.name }}</span>
      <div class="account__wrapp">
        <img
          class="avatar"
          v-if="
            this.$store.getters.getUserData.avatar == undefined ||
            this.$store.getters.getUserData.avatar.length == 0
          "
          src="https://tequila1boy.github.io/controlPanel/img/person.svg"
          alt=""
        />
        <img
          class="avatar"
          v-else
          :src="this.$store.getters.getUserData.avatar"
          alt=""
        />
      </div>
    </div>
  </header>
</template>

<script>
export default {
  methods: {
    search() {
      // запрос в апи и работа с ним
    },
  },
};
</script>
<style scoped lang="scss">
.header {
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  padding-top: 48px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: var(--bg-color);
  padding-bottom: 48px;
  .logo {
    height: 56px;
  }
  .search {
    position: relative;
    .input {
      margin: 0;
      padding-left: 15px;
      padding-right: 48px;
    }
    svg {
      height: 24px;
      width: 24px;
      position: absolute;
      right: 12px;
      top: 50%;
      transform: translateY(-50%);
      cursor: pointer;
    }
  }
  .account {
    display: flex;
    align-items: center;
    span {
      margin-right: 16px;
    }
    .account__wrapp {
      background: var(--light-color);
      height: 56px;
      width: 56px;
      box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.05);
      border-radius: 8px;
      display: grid;
      place-items: center;
      .avatar {
        height: 48px;
        width: 48px;
        object-fit: cover;
      }
    }
  }
}
</style>