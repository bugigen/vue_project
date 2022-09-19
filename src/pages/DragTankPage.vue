<template>
  <div class="drag">
    Drag and Drop Tank
  </div>
</template>

<script>
export default {
  name: "DragTankPage"
};
</script>

<style scoped>
.drag {
  text-align: center;
  height: calc(100vh - 40px);
  background: url(@/assets/images/Tank.jpg) 100% 100% no-repeat;
  background-size: cover;
}
</style>
