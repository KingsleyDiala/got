<template>
  <div class="house-card">
    <router-link :to="{name: 'persons', params: {slug: item.slug}}" >
      <div class="img-container">
        <img src="../../../../public/img/house-icon.png" alt="User">
      </div>
    </router-link>
    <router-link :to="{name: 'persons', params: {slug: item.slug}}" >
      <p>{{ item.name }}</p>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "HouseCard",
  props: {
    item: Object,
  },
};
</script>

<style scoped>
.house-card {
  width: 193px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.img-container {
  width: 193px;
  height: 272px;
  border-radius: 17.414px;
  background: #292e43;
  cursor: pointer;
}
img {
  width: 150px;
  height: auto;
  object-fit: cover;
  border-radius: 17.414px;
  margin-top: 70px;
  opacity: .5;
}
p {
  cursor: pointer;
}
</style>
