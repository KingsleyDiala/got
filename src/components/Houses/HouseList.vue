<template>
  <section class="house">
    <div class="container">
      <h3>Nobel Houses</h3>
      <div class="House-list">
        <HouseCard v-for="(item, index) in houses" :key="index" :item="item" />
      </div>
    </div>
  </section>
</template>

<script>
import HouseCard from "./Components/HouseCard.vue";

export default {
  name: "HousesList",
  components: {
    HouseCard,
  },
  props: {
    houses: Array,
  }
};
</script>

<style scoped>
section {
  padding: 80px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: fit-content;
}
.container {
  width: 85%;
  max-width: 1440px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: fit-content;
}
h3 {
  text-align: start;
}
.House-list {
  display: flex;
  justify-content: start;
  gap: 30px;
  position: relative;
  min-height: 350px;
  height: fit-content;
  flex-wrap: wrap;
}
.search {
  display: flex;
  justify-content: start;
  align-items: center;
  width: 100%;
  gap: 60px;
}
</style>
