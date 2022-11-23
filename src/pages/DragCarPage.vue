<template>
  <div class="drag">
    <div class="task">
      <div>Выбери</div>
      <div>все</div>
      <div>аксессуары</div>
      <div>для</div>
      <div>Shelby</div>
      <div>Cobra</div>
    </div>
    <div class="column">
      <div
        v-for="category in categories"
        :key="category.id"
        @drop="onDrop($event, category.id)"
        class="column-item"
        @dragenter.prevent
        @dragover.prevent
      >
        <h2 id="top">{{ category.name }}</h2>
        <div
          v-for="item in items.filter((x) => x.categoryId === category.id)"
          @dragstart="onDragStart($event, item)"
          class="item"
          :key="item.id"
          draggable="true"
        >
          {{ item.name }}
        </div>
      </div>
    </div>
    <button class="btn btn-success check" @click="checkCar(); showModal()">Проверить</button>
    <button
      class="btn btn-info help"
      @click="showHelp"
      title="Click and look to console"
    >
      Help in <br> console
    </button>
    <button class="btn btn-dark up" @click="toTop">Up</button>

    <modal-window v-show="isModalVisible && isCorrectAccessory" @close="closeModal"></modal-window>
    <modal-window v-show="isModalVisible && !isCorrectAccessory" @close="closeModal">
      <template v-slot:body>No, you're not right!</template>
    </modal-window>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "@/firebase";
import ModalWindow from "@/components/ModalWindow";

const fbCollection = collection(db, "shelby_accessories");

export default {
  name: "DragCarPage",
  data() {
    return {
      isModalVisible: false,
      isCorrectAccessory: false
    };
  },
  components: {
    ModalWindow
  },
  methods: {
    checkCar() {
      let itemArrayRight = [];
      let itemArrayAll = [];
      this.items.forEach((item) => {
        if (item.categoryId === 2 && item.isCorrect === true) {
          itemArrayRight.push(item);
        }
        if (item.categoryId === 2) {
          itemArrayAll.push(item);
        }
      });
      if (itemArrayRight.length === 6 && itemArrayAll.length === 6) {
        this.isCorrectAccessory = true;
      } else {
        this.isCorrectAccessory = false;
      }
    },
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },
    showHelp() {
      this.items.forEach((item) => {
          if (item.isCorrect === true) {
            console.log(item.name);
          }
        }
      );
    },
    toTop() {
      document.querySelector("#top").scrollIntoView({
        behavior: "smooth"
      });
    }
  },
  setup() {
    onMounted(() => {
      onSnapshot(fbCollection, (querySnapshot) => {
        const fbItems = [];
        querySnapshot.forEach((doc) => {
          const item = {
            id: doc.id,
            name: doc.data().name,
            isCorrect: doc.data().isCorrect,
            categoryId: doc.data().categoryId
          };
          fbItems.push(item);
        });
        items.value = fbItems.sort(() => Math.random() - 0.5);
      });
    });

    const items = ref([]);

    const categories = ref([
      { name: "All accessories", id: 1 },
      { name: "All suitable accessories", id: 2 }
    ]);

    function onDragStart(ev, item) {
      ev.dataTransfer.dropEffect = "move";
      ev.dataTransfer.effectAllowed = "move";
      ev.dataTransfer.setData("itemID", item.id);
    }

    function onDrop(ev, categoryId) {
      const itemID = ev.dataTransfer.getData("itemID");

      items.value = items.value.map((x) => {
        if (x.id === itemID) {
          x.categoryId = categoryId;
        }
        return x;
      });
    }

    return {
      items,
      categories,
      onDragStart,
      onDrop
    };
  }
};
</script>

<style lang="scss" scoped>
@import "@/styles/variables.scss";

.drag {
  display: flex;
  justify-content: center;
  position: relative;
  background: url(@/assets/images/Car.jpg) 50% 50% no-repeat;
  @include task();
  @include background();

  .column {
    display: flex;
    justify-content: space-between;
    flex-basis: 60%;
    background: var(--color-bg-yellow);
    padding: 20px;
    border-radius: 10px;
    overflow-y: auto;
    overflow-x: hidden;
    opacity: 0.88;
    transition: all 0.5s ease-out;

    &:hover {
      opacity: 0.96;
      transition: all 0.5s ease-in;
    }

    .column-item {
      background: var(--color-bg-medium-blue);
      padding: 10px;
      border-radius: 5px;
      min-height: 3200px;
      flex-basis: 40%;

      h2 {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 30px;
        min-height: 80px;
      }

      .item {
        background: var(--color-bg-medium-green);
        margin: 20px;
        padding: 10px;
        border-radius: 3px;
        text-align: center;
        color: var(--color-light-black);
      }
    }
  }
}

.check,
.help,
.up {
  position: absolute;
  right: 3%;
}

.check {
  top: 8%;
}

.help {
  top: 20%;
}

.up {
  bottom: 8%;
}


@media (max-width: 992px) {
  .drag {
    font-size: 0.9em;
  }

  .task {
    font-size: 2.7vw;
  }

  .column {
    font-size: 0.8em;

    .column-item {
      h2 {
        font-size: 3vw;
      }
    }
  }
}

@media (max-width: 768px) {
  .drag {
    height: calc(100vh - 130px);

    .task {
      font-size: 2.8vw;
    }

    .help,
    .up,
    .check {
      right: 2%;
      width: 15%;
      font-size: 2.5vw;
    }

    .check {
      padding-left: 7px;
    }

    .column {
      font-size: 2.5vw;

      .column-item {

        .item {
          margin: 5px;
          font-size: 2.5vw;
        }
      }
    }
  }
}
</style>
