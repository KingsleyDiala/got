<template>
  <div class="person-card">
    <!-- render a div if person.house exist -->
    <div class="person-house" v-if="person.house">
      <p>{{ person.house }}</p>
    </div>
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
  position: relative;
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
.person-house {
  padding: 10px 10px;
  border-radius: 10px;
  width: 100%;
}
.person-house p {
  color: #fff;
  font-size: 10px;
  font-weight: 500;
  line-height: 18px;
  text-align: center;
  margin: 0;
}
</style>
