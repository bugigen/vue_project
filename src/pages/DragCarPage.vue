<template>
  <div class="drag">
    <div class="task">
      <div>Choose</div>
      <div>all</div>
      <div>accessories</div>
      <div>of</div>
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
    <button class="btn btn-success check" @click="checkCar(); showModal()">Check</button>
    <button
      class="btn btn-info help"
      @click="showHelp"
      title="Click and look to console"
    >
      Help
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
    },
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
        // console.log(x.isCorrect)
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
  background: url(@/assets/images/Car.jpg) 50% 50% no-repeat;
  @include background();
  display: flex;
  justify-content: center;
  position: relative;

  .task {
    position: absolute;
    top: 2%;
    left: 5%;

    div {
      background: var(--color-bg-task);
      border-radius: 20px;
      margin-top: 5px;
      padding: 5px;
    }
  }
}

.column {
  display: flex;
  justify-content: space-between;
  flex-basis: 55%;
  background: var(--color-bg-yellow);
  padding: 20px;
  border-radius: 10px;
  overflow: auto;
  opacity: 0.88;
  transition: all 0.5s ease-out;

  &:hover {
    opacity: 0.96;
    transition: all 0.5s ease-in;
  }
}

.column-item {
  background: var(--color-bg-medium-blue);
  padding: 10px;
  border-radius: 5px;
  min-height: 3200px;
  flex-basis: 40%;
}

.column-item h2 {
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

.check {
  position: absolute;
  top: 8%;
  right: 10%;
}

.help {
  position: absolute;
  top: 18%;
  right: 10%;
}

.up {
  position: absolute;
  bottom: 10%;
  right: 10%;
}
</style>
