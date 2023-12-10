<template>
  <div class="person">
    <QuotesComponent/>
  </div>
</template>

<script>
import QuotesComponent from '@/components/Quotes/QuotesComponent.vue';

export default {
  name: 'QuotesView',
  components: {
    QuotesComponent
  }
}
</script>
