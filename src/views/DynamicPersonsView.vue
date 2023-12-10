<template>
    <div>
        <PersonsComponent :filterFunction="filterPerson"  :persons="filteredArray || persons" :title="houseName" />
    </div>
</template>

<script>
import PersonsComponent from '@/components/Persons/PersonsComponent.vue';

export default {
    name: 'DynamicPersonsView',
    components: {
        PersonsComponent,
    },
    props: {
        slug: {
            type: String,
            required: true,
        },
  },
  data() { 
    return {
      persons: [],
      houseName: '',
      filteredArray: null,
    };
  },
  async created() {
    // get the slug from the route params
    const slug = this.$route.params.slug;
    // fetch the data from the API
        const fetchPersons = async () => {
            const response = await fetch(
                `https://api.gameofthronesquotes.xyz/v1/house/${slug}`
            );
            const data = await response.json();
            let people = [];
          data.forEach(element => {
              this.houseName = element.name;
                people.push(...element.members);
            });
          this.persons = people;
            return data;
        };
        fetchPersons();
  },
  methods: {
        filterPerson(query) {
            const filter = this.persons.filter((person) => {
                return person.name.toLowerCase().includes(query.toLowerCase());
            });
      this.filteredArray = filter;
        },
    },
}
</script>

<style scoped>

</style>
