<template>
  <div class="tank-list">
    <div class="title">
      {{ title }}
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "TankList",
  props: {
    title: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped>
.tank-list {
  padding: 10px 20px;
  margin: 0 10px;
  border: 2px solid #2e7c04;
  width: 30%;
  min-height: 250px;
  background: lightblue;
}
.title {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  font-weight: bold;
  border-bottom: 2px solid #634b4b;
  height: 40%;
}
</style>