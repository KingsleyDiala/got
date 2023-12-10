<template>
  <div class="home">
    <Hero :filterFunction="filterArray" />
    <HouseList :houses="filteredHouses || houses"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Hero from '@/components/Houses/Hero.vue'
import HouseList from '@/components/Houses/HouseList.vue';

// Fetch data from API
const API_URL = "https://api.gameofthronesquotes.xyz/v1/houses";

export default {
  name: 'HomeView',
  components: {
    Hero,
    HouseList,
  },
  data() {
    return {
      houses: [],
      filteredHouses: null,
    };
  },
  async created() {
    const fetchHouses = async () => {
      const response = await fetch(API_URL);
      const data = await response.json();

      this.houses = data;
      return data;
    };
    fetchHouses();
  },
  methods: {
    filterArray(query) {
      const filter = this.houses.filter((house) => {
        return house.name.toLowerCase().includes(query.toLowerCase());
      });
      this.filteredHouses = filter;
    }
  }
}
</script>
