<template>
  <div class="main">
    Main page <br>
    Let's navigate this site!
  </div>
</template>

<script>
export default {
  name: "MainPage",
  components: {

  },
};
</script>

<style lang="scss" scoped>
@import "@/variables.scss";

  .main {
    text-align: center;
    height: $calcHeight;
    background: url(@/assets/images/Doom.jpg) 50% 50% no-repeat;
    background-size: cover;
    //background: var(--color-red);
  }
</style>
