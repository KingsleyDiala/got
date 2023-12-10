<template>
  <div class="quote-card">
    <h4>{{ typeof quote === 'object' ? quote.character.name : name }}</h4>
    <p>
      <CIcon :icon="cilDoubleQuoteSansLeft" width="20" />
      {{ typeof quote === 'object' ? quote.sentence : quote }}
      <CIcon :icon="cilDoubleQuoteSansRight" width="20" />
    </p>
    <p class="house">
      {{ typeof quote === 'object' ? quote.character.house.name : houseName }} 
    </p>
  </div>
</template>

<script>
import { cilDoubleQuoteSansLeft, cilDoubleQuoteSansRight } from '@coreui/icons';
import { CIcon } from '@coreui/icons-vue';
export default {
  name: 'QuotesCard',
  components: {
    CIcon,
  },
  setup() {
      return {
        cilDoubleQuoteSansLeft,
        cilDoubleQuoteSansRight,
      }
  },
    props: {
      quote: String || Object,
      name: String,
      houseName: String,
    },
}
</script>

<style scoped>
.quote-card {
  width: 40%;
  height: 170px;
  background: rgba(7, 25, 42, 1);
  border-radius: 20px;
  padding: 30px;
  box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.75);
  display: flex;
  justify-content: center;
  align-items: start;
  flex-direction: column;
  min-width: 400px;
}
h4 {
  font-size: 1.5rem;
  font-weight: 700;
  color: #fff;
  margin: 0;
  text-align: start;
  opacity: .6;
}
p {
  text-align: start;
  color: #fff;
}
.house {
  opacity: .5;
  font-size: .8rem;
}
@media screen and (max-width: 500px) {
  .quote-card {
    width: 100%;
  }
}
</style>
