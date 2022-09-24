<template>
  <div class="drag">
    Drag and Drop Car
  </div>
</template>

<script>
export default {
  name: "DragCarPage"
};
</script>

<style scoped>
.drag {
  text-align: center;
  height: calc(100vh - 40px);
  background: url(@/assets/images/Car.jpg) 50% 50% no-repeat;
  background-size: contain;
}
</style>
