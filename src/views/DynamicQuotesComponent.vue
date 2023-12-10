<template>
  <section>
    <div class="container">
      <h3>Quotes from {{ quotes.name }}</h3>
      <router-link name="all-quotes" to="/quotes">
        <button>See Random Quotes</button>
      </router-link>
      <div class="quotes-list">
        <QuotesCard v-for="(item, index) in quotes.quotes" :key="index" :quote=item :name=quotes.name :houseName=quotes.house.name />
      </div>
    </div>
  </section>
</template>

<script>
import QuotesCard from "../components/Quotes/components/QuotesCard.vue";
export default {
  name: 'QuotesComponent',
  components: {
    QuotesCard,
  },
  data() {
    return {
      quotes: {},
      param: this.$route.params,
    };
  },
  async created() {
    const fetchQuotes = async () => {
      const response = await fetch(`https://api.gameofthronesquotes.xyz/v1/character/${this.$route.params.slug}`);
      const data = await response.json();
      this.quotes = data[0];
      return data;
    };
    fetchQuotes();
  },
}
</script>

<style scoped>
section {
    padding: 80px 0;
    display: flex;
    align-items: center;
    justify-content: center;
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
    gap: 20px;
    align-items: center;
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
