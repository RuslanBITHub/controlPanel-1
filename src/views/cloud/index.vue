<template>
  <div class="page padding">
    <headercomponent></headercomponent>
    <navcomponent></navcomponent>
    <div class="page__wrapp">
      <div class="page__body">
        <h1 class="l">
          Облако - <a class="link" href="#">ссылка на сервис</a>
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
}
</style>
