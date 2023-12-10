<template>
  <div class="person-card">
    <router-link :to="{name: 'person-quotes', params: { persons: param || 'house', slug: person.slug} }">
      <div class="img-container">
        <img src="../../../../public/img/user-icon.png" alt="User">
      </div>
    </router-link>
    <router-link :to="{name: 'person-quotes', params: { persons: param || 'house', slug: person.slug} }">
      <p>{{ person.name }}</p>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'PersonCard',
  props: {
    person: Object,
  },
  data() {
    return {
      param: this.$route.path.split('/')[1],
    };
  },
}
</script>

<style scoped>
.person-card {
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
