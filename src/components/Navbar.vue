<template>
  <div class="navbar">
    <div @click="$router.push('/')">Main</div>
    <div @click="$router.push('/drag')">Drag and Drop</div>
    <div @click="$router.push('/api')">API</div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style scoped lang="scss">
.navbar {
  display: flex;
  justify-content: center;
  gap: 20px;

  div {
    cursor: pointer;
  }
}
</style>
