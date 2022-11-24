<template>
  <div class="drag">
    <div class="chooseTank">
      <span id="top">Танк</span>
      <select v-model="tankSelect">
        <option value="" selected disabled>Выбери танк</option>
        <option value="КВ-4">КВ-4</option>
        <option value="ИС-3">ИС-3</option>
        <option value="СУ-101">СУ-101</option>
      </select>

      <div class="tankImage">
        <template v-if="tankSelect==='КВ-4'">
          <img src="@/assets/images/Tank_images/KV-4.jpg" alt="KV-4">
        </template>
        <template v-else-if="tankSelect==='ИС-3'">
          <img src="@/assets/images/Tank_images/IS-3.jpg" alt="IS-3">
        </template>
        <template v-else-if="tankSelect==='СУ-101'">
          <img src="@/assets/images/Tank_images/SU-101.jpg" alt="SU-101">
        </template>
        <template v-else>
          <img src="@/assets/images/Tank_images/Default_Tanks.jpg" alt="Choose">
        </template>
      </div>

      <button class="btn btn-success" @click="verifyTank" data-bs-toggle="modal" data-bs-target="#modalTank">Проверить
      </button>
      <button class="btn btn-info help" data-bs-toggle="modal" data-bs-target="#exampleModal">Help
      </button>

      <div class="modal fade" id="exampleModal" tabindex="-1">
        <div class="modal-dialog modal-dialog-scrollable">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">Аксессуары для танков</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div class="modal-body">
              <p><u>&nbsp;КВ-4&nbsp;</u></p>
              <div v-for="state in this.$store.state.accessoriesKV_4" :key="state">
                {{ state }}
              </div>
              <br>
              <p><u>&nbsp;ИС-3&nbsp;</u></p>
              <div v-for="state in this.$store.state.accessoriesIS_3" :key="state">
                {{ state }}
              </div>
              <br>
              <p><u>&nbsp;СУ-101&nbsp;</u></p>
              <div v-for="state in this.$store.state.accessoriesSU_101" :key="state">
                {{ state }}
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>

      <div class="modal fade" id="modalTank" tabindex="-1">
        <div class="modal-dialog modal-dialog-scrollable">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="modalLabel">О танке</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div class="modal-body">
              <template v-if="this.tankSelect === ''">
                Выбери танк
              </template>

              <template v-else-if="tankSelect !== '' && modalShowKV_4 === true">
                <u> {{ this.tankSelect }} </u> <br>
                <template v-if="this.items.length === this.$store.state.accessoriesKV_4.length">
                  <template v-for="item in this.allAccessories.Guns" :key="item.id">
                    <template v-if="item.tank_name === 'КВ-4'">
                      {{ item.id_name }} - {{ item.name }} : <br>
                      Пробитие - {{ item.penetration }} мм <br>
                      Урон - {{ item.damage }} ед. <br>
                      Цена - {{ item.price }} кредитов <br>
                      <hr>
                    </template>
                  </template>
                  <template v-for="item in this.allAccessories.Engines" :key="item.id">
                    <template v-if="item.tank_name === 'КВ-4'">
                      {{ item.id_name }} - {{ item.name }} : <br>
                      Мощность - {{ item.power }} л.с. <br>
                      Цена - {{ item.price }} кредитов <br>
                      <hr>
                    </template>
                  </template>
                </template>
              </template>

              <template v-else-if="tankSelect !== '' && modalShowIS_3 === true">
                <u> {{ this.tankSelect }} </u> <br>
                <template v-if="this.items.length === this.$store.state.accessoriesIS_3.length">
                  <template v-for="item in this.allAccessories.Guns" :key="item.id">
                    <template v-if="item.tank_name === 'ИС-3'">
                      {{ item.id_name }} - {{ item.name }} : <br>
                      Пробитие - {{ item.penetration }} мм <br>
                      Урон - {{ item.damage }} ед. <br>
                      Цена - {{ item.price }} кредитов <br>
                      <hr>
                    </template>
                  </template>
                  <template v-for="item in this.allAccessories.Engines" :key="item.id">
                    <template v-if="item.tank_name === 'ИС-3'">
                      {{ item.id_name }} - {{ item.name }} : <br>
                      Мощность - {{ item.power }} л.с. <br>
                      Цена - {{ item.price }} кредитов <br>
                      <hr>
                    </template>
                  </template>
                </template>

              </template>
              <template v-else-if="tankSelect !== '' && modalShowSU_101 === true">
                <u> {{ this.tankSelect }} </u> <br>
                <template v-if="this.items.length === this.$store.state.accessoriesSU_101.length">
                  <template v-for="item in this.allAccessories.Guns" :key="item.id">
                    <template v-if="item.tank_name === 'СУ-101'">
                      {{ item.id_name }} - {{ item.name }} : <br>
                      Пробитие - {{ item.penetration }} мм <br>
                      Урон - {{ item.damage }} ед. <br>
                      Цена - {{ item.price }} кредитов <br>
                      <hr>
                    </template>
                  </template>
                  <template v-for="item in this.allAccessories.Engines" :key="item.id">
                    <template v-if="item.tank_name === 'СУ-101'">
                      {{ item.id_name }} - {{ item.name }} : <br>
                      Мощность - {{ item.power }} л.с. <br>
                      Цена - {{ item.price }} кредитов <br>
                      <hr>
                    </template>
                  </template>
                </template>
              </template>
              <template v-else>
                Неправильно!
              </template>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="task">
      <div>Выбери</div>
      <div>аксессуары</div>
      <div>для</div>
      <div>выбранного</div>
      <div>танка</div>
    </div>

    <div class="wrapper">
      <tank-list title="Все аксессуары" id="allAccessories">
        <draggable
          group="tanks"
          ghostClass="on-drag"
          animation="400"
          class="draggable"
          draggable=".item"
        >
          <div class="itemName">Пушки</div>
          <tank-item
            v-for="accessory in allAccessories.Guns"
            :key="accessory.id"
            :item="accessory"
            class="item">
          </tank-item>
          <div class="itemName">Двигатели</div>
          <tank-item
            v-for="accessory in allAccessories.Engines"
            :key="accessory.id"
            :item="accessory"
            class="item">
          </tank-item>
          <div class="itemName">Подвески</div>
          <tank-item v-for="accessory in allAccessories.Suspensions" :key="accessory.id" :item="accessory"
                     class="item"></tank-item>
        </draggable>
      </tank-list>

      <tank-list title="Совместимые аксессуары" id="suitableAccessories">
        <draggable
          group="tanks"
          ghostClass="on-drag"
          animation="400"
          class="draggable"
        >
        </draggable>
      </tank-list>
    </div>

    <button @click="toTop" id="toTop">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <path
          d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z" />
      </svg>
    </button>
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
      url: "https://run.mocky.io/v3/41b0fa69-3295-4540-a844-6890d7cb1e01",
      tankSelect: "",
      modalShowKV_4: false,
      modalShowIS_3: false,
      modalShowSU_101: false,
      items: []
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
        this.shuffle(this.allAccessories.Guns);
        this.shuffle(this.allAccessories.Engines);
        this.shuffle(this.allAccessories.Suspensions);
      });
  },
  methods: {
    shuffle(arr) {
      for (let i = arr.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    },

    verifyTank() {
      let includeKV_4 = 0;
      let includeIS_3 = 0;
      let includeSU_101 = 0;
      this.items = document.querySelectorAll("#suitableAccessories .item");

      this.items.forEach((item) => {
        if (this.$store.state.accessoriesKV_4.includes(item.textContent.trim())) {
          includeKV_4 += 1;
        }
        if (this.$store.state.accessoriesIS_3.includes(item.textContent.trim())) {
          includeIS_3 += 1;
        }
        if (this.$store.state.accessoriesSU_101.includes(item.textContent.trim())) {
          includeSU_101 += 1;
        }
      });

      if (includeKV_4 > 0 && this.tankSelect === "КВ-4" && includeIS_3 === 0 && includeSU_101 === 0) {
        this.modalShowKV_4 = true;
        this.modalShowIS_3 = false;
        this.modalShowSU_101 = false;
        alert("Correct");
      } else if (includeIS_3 > 0 && this.tankSelect === "ИС-3" && includeKV_4 === 0 && includeSU_101 === 0) {
        this.modalShowIS_3 = true;
        this.modalShowKV_4 = false;
        this.modalShowSU_101 = false;
        alert("Correct");
      } else if (includeSU_101 > 0 && this.tankSelect === "СУ-101" && includeKV_4 === 0 && includeIS_3 === 0) {
        this.modalShowSU_101 = true;
        this.modalShowKV_4 = false;
        this.modalShowIS_3 = false;
        alert("Correct");
      } else if (this.tankSelect === "") {
        alert("Choose tank");
      } else {
        this.modalShowSU_101 = false;
        this.modalShowKV_4 = false;
        this.modalShowIS_3 = false;
        alert("Wrong!");
      }
    },

    toTop() {
      document.querySelector("#top").scrollIntoView({
        behavior: "smooth"
      });
    }
  }
});
</script>

<style lang="scss" scoped>
@import "@/styles/variables.scss";

.drag {
  position: relative;
  overflow: auto;
  background: url(@/assets/images/Tank2.jpg) 50% 50% no-repeat;
  @include background();
  @include task();
}

.chooseTank {
  position: relative;
  padding: 10px 0 0;
  font-size: 1.3em;
  display: flex;
  justify-content: center;
  gap: 20px;

  select {
    font-size: 0.7em;
  }

  span {
    color: var(--color-font);
  }

  .help {
    position: absolute;
    top: 20%;
    right: 8%;
  }
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
  background: var(--color-bg-blue);
  color: var(--color-white);
  z-index: 10;
}

.itemName {
  margin-top: 10px;
  color: var(--color-font-red);
}

.tankImage {
  height: 60px;

  img {
    width: 100%;
    height: 100%;
    border: 3px solid var(--color-white);
  }
}

#toTop {
  position: fixed;
  bottom: 30px;
  right: 40px;
  width: 50px;
  height: 50px;
  z-index: 10;
  text-align: center;
  border-radius: 4px;
  background: var(--color-bg-green);
  box-shadow: 0 0 0 3px var(--color-shadow);
  transition: all 0.3s ease-in-out;

  &:hover {
    background: var(--color-bg-dark-green);

    svg {
      fill: var(--color-white);
      transition: all 0.3s ease-in-out;
    }
  }

  svg {
    position: relative;
    transition: all 0.3s ease-in-out;
  }
}

.modal-body {
  font-size: 0.8em;
}

@media (max-width: 992px) {
  .task {
    font-size: 2.8vw;
  }
}

@media (max-width: 768px) {
  .drag {
    height: calc(100vh - 130px);

    .task {
      font-size: 2.7vw;
    }

    .chooseTank {
      flex-direction: column;
      align-items: center;

      option {
        font-size: 0.7em;
      }
    }

    .wrapper {
      font-size: 0.8em;
    }
  }
}
</style>
