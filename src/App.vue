<template>
  <navbar></navbar>
  <div class="wrapper">
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";

export default {
  components: {
    Navbar
  }
};
</script>

<style lang="scss">
@import "@/variables.scss";

@font-face {
  font-family: "Fredoka One";
  src: local("Fredoka One"),
  url("@/assets/fonts/Fredoka_One/Fredoka One.woff2") format("woff2"),
  url("@/assets/fonts/Fredoka_One/Fredoka One.woff") format("woff");
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}

html,
body {
  background: var(--color-bg);
  min-height: 100vh;
  font-family: "Fredoka One", monospace;
  font-size: 1.3rem;
  color: var(--color-red);
  cursor: default;
}
</style>
