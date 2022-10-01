<template>
  <div class="tank-item">
    {{item.to}}
  </div>
</template>

<script>
export default {
  name: "TankItem",
  props: {
    item: {
      required: true,
    }
  }
};
</script>

<style scoped>
.tank-item {
  background: #e9e96e;
  padding: 10px 20px;
  margin: 15px 0;
  border: 2px solid #9d9dc7;
  font-size: 0.9em;
}
</style>