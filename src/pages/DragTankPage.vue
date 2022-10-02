<template>
  <div class="drag">
    <p>Tank</p>
    <div class="wrapper">
      <tank-list title="All accessories">
        <tank-item v-for="accessory in allAccessories" :key="accessory.id" :item="accessory[0]"></tank-item>
        <tank-item v-for="accessory in allAccessories" :key="accessory.id" :item="accessory[1]"></tank-item>
        <tank-item v-for="accessory in allAccessories" :key="accessory.id" :item="accessory[2]"></tank-item>
        <tank-item v-for="accessory in allAccessories" :key="accessory.id" :item="accessory[3]"></tank-item>
        <tank-item v-for="accessory in allAccessories" :key="accessory.id" :item="accessory[4]"></tank-item>
        <tank-item v-for="accessory in allAccessories" :key="accessory.id" :item="accessory[5]"></tank-item>
        <tank-item v-for="accessory in allAccessories" :key="accessory.id" :item="accessory[6]"></tank-item>
        <tank-item v-for="accessory in allAccessories" :key="accessory.id" :item="accessory[7]"></tank-item>
        <tank-item v-for="accessory in allAccessories" :key="accessory.id" :item="accessory[8]"></tank-item>
        <tank-item v-for="accessory in allAccessories" :key="accessory.id" :item="accessory[9]"></tank-item>
        <tank-item v-for="accessory in allAccessories" :key="accessory.id" :item="accessory[10]"></tank-item>
        <tank-item v-for="accessory in allAccessories" :key="accessory.id" :item="accessory[11]"></tank-item>
        <tank-item v-for="accessory in allAccessories" :key="accessory.id" :item="accessory[12]"></tank-item>
      </tank-list>
      <tank-list title="Suitable accessories">
        <!--        <tank-item v-for="accessory in allAccessories.Engines" :key="accessory.id" :item="accessory.name"></tank-item>-->
      </tank-list>
    </div>
  </div>
</template>

<script>
import TankList from "@/components/TankList";
import TankItem from "@/components/TankItem";
import axios from "axios";

export default {
  name: "DragTankPage",
  data() {
    return {
      allAccessories: [],
      url: "https://run.mocky.io/v3/d4b55493-5a4e-41a7-ac93-04c758e59799"
    };
  },
  components: {
    TankList,
    TankItem
  },
  mounted() {
    axios.get(this.url)
      .then((response) => {
        this.allAccessories = response.data;
        // console.log(this.allAccessories.Guns[0].id_name);
      });
  }
};
</script>

<style lang="scss" scoped>
@import "@/styles/variables.scss";

.drag {
  overflow: auto;
  background: url(@/assets/images/Tank.jpg) 50% 50% no-repeat;
  @include background();
}

.drag > p {
  padding: 10px 0 0;
  font-weight: bold;
  font-size: 1.1em;
}

.wrapper {
  display: flex;
  justify-content: center;
  margin: 20px 0;
  min-height: 70%;
}
</style>
