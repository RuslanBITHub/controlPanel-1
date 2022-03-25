<template>
  <div class="page padding">
    <headercomponent></headercomponent>
    <navcomponent></navcomponent>
    <div class="page__wrapp">
      <div class="page__body">
        <h1 class="l">Оповещение клиентов</h1>
        <button
          class="button"
          :class="{ active: filter[0] }"
          @click="filter[0] = !filter[0]"
        >
          кнопка фильтра
        </button>
        <button
          class="button"
          :class="{ active: filter[1] }"
          @click="filter[1] = !filter[1]"
        >
          кнопка фильтра
        </button>
        <button
          class="button"
          :class="{ active: filter[2] }"
          @click="filter[2] = !filter[2]"
        >
          кнопка фильтра
        </button>
        <button
          class="button"
          :class="{ active: filter[3] }"
          @click="filter[3] = !filter[3]"
        >
          кнопка фильтра
        </button>
        <table>
          <tr>
            <th>id</th>
            <th>атрибут</th>
            <th>атрибут</th>
            <th>атрибут</th>
            <th>атрибут</th>
            <th>атрибут</th>
            <th>атрибут</th>
          </tr>
          <tr>
            <td>1</td>
            <td>атрибут</td>
            <td>атрибут</td>
            <td>атрибут</td>
            <td>атрибут</td>
            <td>атрибут</td>
            <td>атрибут</td>
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
    return {
      filter: [false, false, false, false],
    };
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
.button {
  background: var(--light-color);
  color: var(--dark-color);
  min-width: 100px;
  width: auto;
  padding: 0px 24px;
  margin: 12px;
  display: inline-grid;
  &.active {
    background: var(--second-color);
    color: var(--light-color);
  }
  @media (min-width: 700px) {
    &:hover {
      transition: 0.2s;
      background: var(--main-color);
      color: var(--light-color);
    }
  }
}
</style>
