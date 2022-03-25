<template>
  <div class="page padding">
    <headercomponent></headercomponent>
    <navcomponent></navcomponent>
    <div class="page__wrapp">
      <div class="page__body">
        <h1 class="l">Главная</h1>
        <h2 class="m">
          Добро пожаловать, {{ this.$store.getters.getUserData.name }}
        </h2>
        <p class="m">Список задач:</p>
        <table>
          <tr>
            <th>id</th>
            <th>Название</th>
            <th>Состояние</th>
            <th>Владелец</th>
            <th>Создана</th>
            <th>Обновлена</th>
            <th>Результат</th>
          </tr>
          <tr>
            <td>1</td>
            <td>name</td>
            <td>вкл</td>
            <td>1232312312</td>
            <td>02.03.2000</td>
            <td>03.22.1233</td>
            <td>результат</td>
          </tr>
        </table>
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
    h2 {
      margin-top: 24px;
      margin-bottom: 24px;
    }
    .list {
      display: flex;
      flex-direction: column;
    }
    table {
      width: 100%;
      font-size: 14px;
      background: #dbdbdb;
      th {
        background: var(--third-color);
        color: var(--light-color);
        border: 1px solid var(--third-color);
      }
      td {
        background: var(--light-color);
        padding-left: 12px;
      }
    }
  }
}
</style>
