<template>
  <div class="drag">
    <p>Drag and Drop Tank</p>
    <div class="wrapper">
      <tank-list title="All accessories">
        <tank-item v-for="accessory in allAccessories" :key="accessory.id" :item="accessory"></tank-item>
      </tank-list>
      <tank-list title="Suitable accessories">
        <tank-item v-for="accessory in suitableAccessories" :key="accessory.id" :item="accessory"></tank-item>
      </tank-list>
    </div>
  </div>
</template>

<script>
import TankList from "@/components/TankList";
import TankItem from "@/components/TankItem";

export default {
  name: "DragTankPage",
  data() {
    return {
      allAccessories: [{ to: "guns" }],
      suitableAccessories: [{ to: "gun of IS-3" }]
    };
  },
  components: {
    TankList,
    TankItem
  }
};
</script>

<style lang="scss" scoped>
@import "@/variables.scss";

.drag {
  text-align: center;
  height: $calcHeight;
  background: url(@/assets/images/Tank.jpg) 50% 50% no-repeat;
  background-size: contain;
}

.drag > p {
  padding: 10px 0 0;
}

.wrapper {
  display: flex;
  justify-content: center;
  margin: 20px 0;
}
</style>
