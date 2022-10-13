<template>
  <div v-if="item" class="tank-item">
    <img :src=getImgUrl() alt="Accessory"> &nbsp;
    {{item.id_name}} <br>
    {{item.name}}
  </div>
</template>

<script>
export default {
  name: "TankItem",
  props: {
    item: {
      // type: String,
      required: false,
    }
  },
  data() {
    return {
    }
  },
  methods: {
    getImgUrl() {
      return require("@/" + this.item.image);
    }
  }
};
</script>

<style lang="scss" scoped>
.tank-item {
  background: var(--color-bg-yellow);
  padding: 10px 20px;
  margin: 15px 0;
  border: 2px solid var(--color-purple);
  font-size: 0.9em;
}
</style>