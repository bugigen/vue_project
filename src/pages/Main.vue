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

<style scoped>
  .main {
    text-align: center;
    height: calc(100vh - 40px);
    background: url(@/assets/images/Doom.jpg) 50% 50% no-repeat;
    background-size: cover;
  }
</style>
