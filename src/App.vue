<template>
  <div class="wrapper">
    <navbar></navbar>
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";

export default {
  components: {
    Navbar,
  },
};
</script>

<style lang="scss">
@font-face {
  font-family: "Fredoka One";
  src: local("Fredoka One"),
    url("@/assets/fonts/Fredoka_One/Fredoka One.woff2") format("woff2"),
    url("@/assets/fonts/Fredoka_One/Fredoka One.woff") format("woff");
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

$colors: (
  "bg": #dcdcdc,
  "white": #fff,
  "black": #000,
  "font": #2c3e50,
);

:root {
  @each $key, $value in $colors {
    --color-#{$key}: #{$value};
  }
}

body {
  background: var(--color-bg);
  min-height: 100vh;
  font-family: "Fredoka One", monospace;
  text-align: center;
  color: var(--color-font);
  cursor: default;
}
</style>
