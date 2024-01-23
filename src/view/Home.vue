<script setup lang="ts" name="Home">
import { ref } from "vue";
import router from "../router/router";
import items from "../data/items";
import ProductCard from "../components/ProductCard.vue";

const word = ref<string>("");
const sortSelected = ref<string>("");
const products = ref<any>(items);

const gotoDetail = (item: any) => {
  router.push({
    name: "DetailPage",
    params: {
      id: item.id,
      name: item.name,
      price: item.price,
      description: item.description,
      image: item.imageUrl,
    },
  });
};

const search = () => {
  products.value = items.filter((item) =>
    item.name.toLowerCase().includes(word.value.toLowerCase())
  );
};

const sort = () => {
  if (sortSelected.value === "Giá giảm dần") {
    products.value = items.sort((n1, n2) => n1.price - n2.price);
  } else if (sortSelected.value === "Giá tăng dần") {
    products.value = items.sort((n1, n2) => n2.price - n1.price);
  }
};
</script>

<template>
  <div class="screen">
    <input
      class="search-bar"
      type="text"
      v-model="word"
      placeholder="Tìm kiếm sản phẩm"
      @change="search"
    />

    <div class="sort-container">
      <select v-model="sortSelected" @change="sort">
        <option disabled value="">Chọn kiểu sort</option>
        <option>Giá giảm dần</option>
        <option>Giá tăng dần</option>
      </select>
    </div>

    <div class="product-list">
      <ProductCard
        v-for="(item, index) in products"
        :key="index"
        :image="item.imageUrl"
        :name="item.name"
        :price="item.price"
        @onClick="gotoDetail(item)"
      />
    </div>
  </div>
</template>

<style scoped>
.product-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

p {
  padding: 0px;
  margin: 5px 10px;
}

.search-bar {
  height: 40px;
  width: 50%;
}

.screen {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.sort-bar {
  height: 30px;
  display: flex;
  background-color: aqua;
}

.sort-container {
  width: 100%;
  padding-left: 90px;
}
</style>
