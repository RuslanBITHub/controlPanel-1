<template>
  <div class="page padding">
    <headercomponent></headercomponent>
    <navcomponent></navcomponent>
    <div class="page__wrapp">
      <div class="page__body">
        <h1 class="l">
          Настройки профиля - <span @click="this.exit">выйти</span>
        </h1>
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
  mounted() {},
  methods: {
    exit() {
      this.$store.dispatch("SET_TOKEN", undefined);
      document.cookie = "token=token; path=/; max-age=-10";
      this.$router.push("/auth/");
    },
  },
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
    h1 {
      span {
        color: var(--second-color);
        cursor: pointer;
      }
    }
  }
}
</style>
