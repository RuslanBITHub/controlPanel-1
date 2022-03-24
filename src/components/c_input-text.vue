<template>
  <div class="input-wrapp">
    <p class="text">{{ text }}</p>
    <input
      ref="input"
      class="input"
      type="text"
      maxlength="32"
      @focus="inputFocus"
      @blur="inputBlur"
    />
  </div>
</template>

<script>
import gsap from "gsap";
export default {
  props: ["text"],
  mounted() {
    if (this.$refs.input.value != "") {
      this.inputFocus();
    }
  },
  methods: {
    inputFocus: function () {
      let parent = this.$refs.input.parentElement;
      let input = this.$refs.input;
      let text = parent.querySelector(".text");
      if (input.value == "") {
        gsap.to(text, {
          y: "-44px",
          duration: 0.2,
        });
      }
    },
    inputBlur: function () {
      let parent = this.$refs.input.parentElement;
      let input = this.$refs.input;
      let text = parent.querySelector(".text");
      if (input.value == "") {
        gsap.to(text, {
          y: 0,
          duration: 0.2,
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
</style>