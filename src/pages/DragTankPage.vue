<template>
  <div class="drag">
    <div class="chooseTank">
      <span>Tank</span>
      <select v-model="tankSelect">
        <option value="" selected disabled>Choose Tank</option>
        <option value="КВ-4">КВ-4</option>
        <option value="ИС-3">ИС-3</option>
        <option value="СУ-101">СУ-101</option>
      </select>
      <div v-if="tankSelect==='КВ-4'" class="tankImage">
        <img src="@/assets/images/Tank_images/KV-4.jpg" alt="KV-4">
      </div>
      <div v-else-if="tankSelect==='ИС-3'" class="tankImage">
        <img src="@/assets/images/Tank_images/IS-3.jpg" alt="IS-3">
      </div>
      <div v-else-if="tankSelect==='СУ-101'" class="tankImage">
        <img src="@/assets/images/Tank_images/SU-101.jpg" alt="SU-101">
      </div>
      <div v-else class="tankImage">
        <img src="@/assets/images/Tank_images/Default_Tanks.jpg" alt="Choose">
      </div>
      <button class="btn btn-success" @click="verifyTank">Verify</button>
    </div>
    <div class="wrapper">
      <tank-list title="All accessories" id="allAccessories">
        <draggable
          group="tanks"
          ghostClass="on-drag"
          animation="400"
          class="draggable"
          draggable=".item"
        >
          <!--          <template v-for="i in 12">-->
          <!--            <tank-item v-for="accessory in allAccessories" :key="accessory.id" :item="accessory[i-1]"></tank-item>-->
          <!--          </template>-->
          <div class="itemName">Guns</div>
          <tank-item
            v-for="accessory in allAccessories.Guns"
            :key="accessory.id"
            :item="accessory"
            class="item">
          </tank-item>
          <div class="itemName">Engines</div>
          <tank-item
            v-for="accessory in allAccessories.Engines"
            :key="accessory.id"
            :item="accessory"
            class="item">
          </tank-item>
          <div class="itemName">Suspensions</div>
          <tank-item v-for="accessory in allAccessories.Suspensions" :key="accessory.id" :item="accessory"
                     class="item"></tank-item>
        </draggable>
      </tank-list>

      <tank-list title="Suitable accessories" id="suitableAccessories">
        <draggable
          group="tanks"
          ghostClass="on-drag"
          animation="400"
          class="draggable"
        >
        </draggable>

        <!--        <tank-item v-for="accessory in allAccessories.Engines" :key="accessory.id" :item="accessory.name"></tank-item>-->
      </tank-list>
    </div>
  </div>
</template>

<script>
import TankList from "@/components/TankList";
import TankItem from "@/components/TankItem";
import axios from "axios";
import { defineComponent } from "vue";
import { VueDraggableNext } from "vue-draggable-next";

export default defineComponent({
  name: "DragTankPage",
  data() {
    return {
      enabled: true,
      dragging: false,
      allAccessories: [],
      suitableAccessories: [],
      url: "https://run.mocky.io/v3/d4b55493-5a4e-41a7-ac93-04c758e59799",
      tankSelect: ""
    };
  },
  components: {
    TankList,
    TankItem,
    draggable: VueDraggableNext
  },
  mounted() {
    axios.get(this.url)
      .then((response) => {
        this.allAccessories = response.data;
        // console.log(this.allAccessories.Guns[0].id_name);
        // console.log(this.allAccessories);
      });
  },
  methods: {
    verifyTank() {
      // this.suitableAccessories.push(this.allAccessories.Guns[0].name)
      // console.log(this.suitableAccessories);
      let items = document.querySelectorAll("#suitableAccessories .item");
      items.forEach(item => {
        console.log(item.textContent);
      });
    }
  }
});
</script>

<style lang="scss" scoped>
@import "@/styles/variables.scss";

.drag {
  overflow: auto;
  background: url(@/assets/images/Tank.jpg) 50% 50% no-repeat;
  @include background();
}

.chooseTank {
  padding: 10px 0 0;
  //font-weight: bold;
  font-size: 1.3em;
  display: flex;
  justify-content: center;
  gap: 20px;
}

.wrapper {
  display: flex;
  justify-content: center;
  margin: 20px 0;
  min-height: 70%;
}

.draggable {
  min-height: 90%;
}

.on-drag {
  background: #7ccfe0;
  color: #fff;
  z-index: 10;
}

.itemName {
  margin-top: 10px;
  color: var(--color-red-font);
}

.chooseTank select {
  font-size: 0.7em;
}

.chooseTank button {
  margin-left: 100px;
}

.tankImage {
  height: 60px;
}

.tankImage img {
  width: 100%;
  height: 100%;
}
</style>
