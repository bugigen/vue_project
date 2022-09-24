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
@font-face {
  font-family: "Fredoka One";
  src: local("Fredoka One"),
  url("@/assets/fonts/Fredoka_One/Fredoka One.woff2") format("woff2"),
  url("@/assets/fonts/Fredoka_One/Fredoka One.woff") format("woff");
  font-weight: normal;
  font-style: normal;
  font-display: swap;
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
  background: #3d3d3d;
  min-height: 100vh;
  font-family: "Fredoka One", monospace;
  color: var(--bs-red);
  cursor: default;
}
</style>
