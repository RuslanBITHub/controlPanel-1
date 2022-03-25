<template>
  <div class="page padding">
    <headercomponent></headercomponent>
    <navcomponent></navcomponent>
    <div class="page__wrapp">
      <div class="page__body">
        <div class="body__header">
          <h1 class="l">Скрипты</h1>
          <form class="search">
            <input
              class="input"
              @input="this.search"
              type="text"
              placeholder="название скрипта"
              ref="scriptsearch"
            />
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
        </div>
        <ul class="list" ref="itemlist">
          <li class="item">
            <button class="button">Базы на автообновлении</button>
          </li>
          <li class="item">
            <button class="button">Опубликовать базу</button>
          </li>
          <li class="item">
            <button class="button">Список активных пользователей</button>
          </li>
          <li class="item">
            <button class="button">Установить базу на автообновление</button>
          </li>
          <li class="item">
            <button class="button">Список опубликованных баз</button>
          </li>
          <li class="item">
            <button class="button">Список баз</button>
          </li>
          <li class="item">
            <button class="button">Просмотр автообновлений</button>
          </li>
          <li class="item">
            <button class="button">Перезапуск публикаций</button>
          </li>
          <li class="item">
            <button class="button">Выслать/создать ярлык</button>
          </li>
          <li class="item">
            <button class="button">Платформа WEB</button>
          </li>
          <li class="item">
            <button class="button">Очистить кеш</button>
          </li>
          <li class="item">
            <button class="button">Отключение публикаций</button>
          </li>
          <li class="item">
            <button class="button">Урезать диск</button>
          </li>
          <li class="item">
            <button class="button">Список активных пользователей</button>
          </li>
          <li class="item">
            <button class="button">Включение публикаций</button>
          </li>
          <li class="item">
            <button class="button">Расширить диск</button>
          </li>
          <li class="item">
            <button class="button">Добавить пользователя</button>
          </li>
          <li class="item">
            <button class="button">Установить WEB на ночной ребут</button>
          </li>
          <li class="item">
            <button class="button">Создать базу</button>
          </li>
          <li class="item">
            <button class="button">Урезать пользователя</button>
          </li>
          <li class="item">
            <button class="button">Список активных пользователей</button>
          </li>
          <li class="item">
            <button class="button">Поиск SIDа пользователя</button>
          </li>
          <li class="item">
            <button class="button">Создать FTP</button>
          </li>
          <li class="item">
            <button class="button">Бэкапы клиента</button>
          </li>
          <li class="item">
            <button class="button">Сбросить пароль</button>
          </li>
          <li class="item">
            <button class="button">Сброс входов в базу</button>
          </li>
        </ul>
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
  methods: {
    search() {
      let itemlist = this.$refs.itemlist;
      let items = itemlist.querySelectorAll(".item");
      if (this.$refs.scriptsearch.value == "") {
        for (let i = 0; i < items.length; i++) {
          items[i].classList.remove("disabled");
        }
      } else {
        for (let i = 0; i < items.length; i++) {
          items[i].classList.remove("disabled");
        }
        for (let i = 0; i < items.length; i++) {
          if (
            items[i]
              .querySelector(".button")
              .innerText.toLowerCase()
              .indexOf(this.$refs.scriptsearch.value.toLowerCase()) == -1
          ) {
            items[i].classList.add("disabled");
          }
        }
      }
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
  }
}
.body__header {
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
}
.list {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  .item {
    margin: 0 12px;
    &.disabled {
      display: none;
    }
  }
  .button {
    background: var(--light-color);
    color: var(--dark-color);
    min-width: 100px;
    width: auto;
    padding: 0px 24px;
    @media (min-width: 700px) {
      &:hover {
        transition: 0.2s;
        background: var(--main-color);
        color: var(--light-color);
      }
    }
  }
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
</style>
