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
@import "@/styles/variables.scss";

.drag {
  background: url(@/assets/images/Car.jpg) 50% 50% no-repeat;
  @include background();
}
</style>
