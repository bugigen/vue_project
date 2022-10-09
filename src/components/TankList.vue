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

<style lang="scss" scoped>
.tank-list {
  padding: 10px 20px;
  margin: 0 40px 10px;
  border: 2px solid #2e7c04;
  width: 22vw;
  min-height: 250px;
  background: lightblue;
  opacity: 0.87;
}

.tank-list:hover {
  opacity: 1.0;
}

.title {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  font-weight: bold;
  border-bottom: 2px solid #634b4b;
  height: 100px;
}
</style>