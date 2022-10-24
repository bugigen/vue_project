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
  },
};
</script>

<style lang="scss">
@import "@/styles/variables.scss";

@font-face {
  font-family: "Fredoka";
  src: local("Fredoka"),
       url("@/assets/fonts/Fredoka/Fredoka.woff2") format("woff2"),
       url("@/assets/fonts/Fredoka/Fredoka.woff") format("woff");
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: BalsamiqSans-Bold;
  src: local(BalsamiqSans-Bold),
       url(@/assets/fonts/Balsamiq_Sans/BalsamiqSans-Bold.woff2) format("woff2"),
       url(@/assets/fonts/Balsamiq_Sans/BalsamiqSans-Bold.woff) format("woff");
  font-weight: bold;
  font-style: normal;
  font-display: swap;
}

html,
body {
  background: var(--color-bg);
  min-height: 100vh;
  font-family: Fredoka, BalsamiqSans-Bold, monospace;
  font-size: 1.3rem;
  color: var(--color-font);
  cursor: default;
}

.wrapper {
  position: relative;
}
</style>
