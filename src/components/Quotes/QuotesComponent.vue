<template>
  <section>
    <div class="container">
      <h3>Random Quotes</h3>
      <button @click="fetchQuotes">Fetch New Quotes</button>
      <div class="quotes-list">
        <QuotesCard v-for="(item, index) in quotes" :key="index" :quote=item />
      </div>
    </div>
  </section>
</template>

<script>
import QuotesCard from "./components/QuotesCard.vue";
export default {
  name: 'QuotesComponent',
  components: {
    QuotesCard,
  },
  data() {
    return {
      quotes: [],
    };
  },
  methods: {
    async fetchQuotes() {
      const response = await fetch("https://api.gameofthronesquotes.xyz/v1/random/5");
      const data = await response.json();

      this.quotes = data;
    },
  },
  async created() {
    this.fetchQuotes();
  },
}
</script>

<style scoped>
section {
    padding: 80px 0;
    display: flex;
    align-items: center;
    justify-content: start;
    width: 100%;
    height: fit-content;
    flex-direction: column;
    gap: 50px;
    min-height: calc(100vh - 177px - 160px);
}
.container {
    width: 85%;
    max-width: 1440px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: fit-content;
    align-items: center;
    gap: 20px;
}
.quotes-list {
    display: flex;
    justify-content: center;
    gap: 30px;
    position: relative;
    height: fit-content;
    flex-wrap: wrap;
}
button {
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background: #292e43;
  color: #fff;
  cursor: pointer;
  font-size: 1rem;
  transition: all .3s ease-in-out;
  width: fit-content;
  margin-bottom: 40px;
}
h3 {
    margin: 0;
    }
</style>
