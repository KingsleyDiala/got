<template>
    <div>
        <PersonsComponent :filterFunction="filterPerson" :persons="filteredPerson || allPerson" title="All members of the nobel families" />
    </div>
</template>

<script>
import PersonsComponent from '@/components/Persons/PersonsComponent.vue';

export default {
    name: 'PersonsView',
    components: {
        PersonsComponent,
    },
    data() {
        return {
            allPerson: [],
            filteredPerson: null,
        };
    },
    async created() { 
        const fetchPersons = async () => {
            const response = await fetch(
                "https://api.gameofthronesquotes.xyz/v1/houses"
            );
            const data = await response.json();
            data.forEach(element => {
                this.allPerson.push(...element.members);
            });
            return data;
        };
        fetchPersons();
    },
    methods: {
        filterPerson(query) {
            const filter = this.allPerson.filter((person) => {
                return person.name.toLowerCase().includes(query.toLowerCase());
            });
            this.filteredPerson = filter;
        },
    },
}
</script>

<style scoped>
/* Your component's CSS styles go here */
</style>
