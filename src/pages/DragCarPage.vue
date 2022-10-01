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

<style lang="scss" scoped>
@import "@/variables.scss";

.drag {
  text-align: center;
  height: $calcHeight;
  background: url(@/assets/images/Car.jpg) 50% 50% no-repeat;
  background-size: contain;
}
</style>
