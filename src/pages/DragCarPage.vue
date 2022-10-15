<template>
  <div class="drag">
    <div class="column">
      <div
        v-for="category in categories"
        :key="category.id"
        @drop="onDrop($event, category.id)"
        class="column-item"
        @dragenter.prevent
        @dragover.prevent
      >
        <h2>{{ category.name }}</h2>
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
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebase";

export default {
  name: "DragCarPage",
  setup() {

    onMounted(async () => {
      const querySnapshot = await getDocs(collection(db, "shelby_accessories"));
      let fbItems = [];
      querySnapshot.forEach((doc) => {
        // console.log(doc.id, " => ", doc.data());
        const item = {
          id: doc.id,
          name: doc.data().name,
          isCorrect: doc.data().isCorrect,
          categoryId: doc.data().categoryId
        }
        fbItems.push(item);
      });
      items.value = fbItems;
    });

    const items = ref([
      // { name: "Item 1", id: 1, categoryId: 1 },
      // { name: "Item 2", id: 2, categoryId: 1 },
      // { name: "Item 3", id: 3, categoryId: 1 },
      // { name: "Item 4", id: 4, categoryId: 1 },
      // { name: "Item 5", id: 5, categoryId: 1 },
      // { name: "Item 6", id: 6, categoryId: 1 },
      // { name: "Item 7", id: 7, categoryId: 1 },
      // { name: "Item 8", id: 8, categoryId: 1 }
    ]);

    const categories = ref([
      { name: "All accessories", id: 1 },
      { name: "Car", id: 2 }
    ]);

    function onDragStart(ev, item) {
      ev.dataTransfer.dropEffect = "move";
      ev.dataTransfer.effectAllowed = "move";
      ev.dataTransfer.setData("itemID", item.id);
      console.log(typeof item.id)
    }

    function onDrop(ev, categoryId) {
      const itemID = parseInt(ev.dataTransfer.getData("itemID"));
        // console.log(items.value)
      items.value = items.value.map((x) => {
        console.log(typeof x.id)
        console.log(typeof itemID)
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
  background: url(@/assets/images/Car.jpg) 50% 50% no-repeat;
  @include background();
  display: flex;
  justify-content: center;
  //gap: 40px;
  //min-height: 100%;
  //overflow: auto;
}

.column {
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  flex-basis: 50%;
  background: rgb(250, 232, 112);
  //min-height: 1000px;
  padding: 20px;
  border-radius: 10px;
  overflow: auto;
  opacity: 0.88;
}

.column-item {
  background: rgb(94, 94, 243);
  padding: 10px;
  border-radius: 5px;
  min-height: 2200px;
  //height: 1000px;
  flex-basis: 43%;
}

.column-item h2 {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
  min-height: 80px;
}

.item {
  background: rgb(84, 189, 96);
  margin: 20px;
  padding: 10px;
  border-radius: 3px;
  text-align: center;
  color: #262223;
}
</style>
