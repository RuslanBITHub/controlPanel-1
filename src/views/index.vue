<template>
  <div class="page">
    <inputtext text="логин"></inputtext>
    <inputpassword text="пароль"></inputpassword>
    <button class="button">войти</button>
  </div>
</template>
<script>
import inputpassword from "../components/c_input-password.vue";
import inputtext from "../components/c_input-text.vue";
export default {
  components: { inputpassword, inputtext },
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>
