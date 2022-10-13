<template>
  <div class="main">
    Main page <br>
    Let's navigate this site!
  </div>
</template>

<script>
export default {
  name: "MainPage",
  components: {}
};
</script>

<style lang="scss" scoped>
@import "@/styles/variables.scss";

.main {
  background: url(@/assets/images/Tank.jpg) 50% 50% no-repeat;
  @include background();
}
</style>
