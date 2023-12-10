<template>
    <section>
        <div>
            <h3>{{ title }}</h3>
            <p>Click to see quotes</p>
        </div>
        <div class="input">
            <input type="text" placeholder="Search for a person" @input="filterFunction($event.target.value)" />
            <CIcon :icon="cilZoom" width="26" customClassName="search-icon"/>
        </div>
        <div class="persons-list">
            <PersonCard v-for="(person, index) in persons" :key="index" :person="person"/>
        </div>
    </section>
</template>

<script>
import PersonCard from "./components/PersonCard.vue";
import { cilZoom } from '@coreui/icons';
import { CIcon } from '@coreui/icons-vue';


export default {
    name: "PersonsComponent",
    components: {
        PersonCard,
        CIcon,
    },
    setup() {
        return { cilZoom }
    },
    props: {
        title: {
            type: String,
            required: true,
        },
        persons: {
            type: Array,
            required: true,
        },
        filterFunction: Function,
    },
};
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
.persons-list {
    width: 85%;
    max-width: 1440px;
    display: flex;
    justify-content: start;
    gap: 30px;
    position: relative;
    min-height: 350px;
    height: fit-content;
    flex-wrap: wrap;
}
h3 {
    margin: 0;
}
.input {
    min-width: 300px;
    width: 500px;
    height: 45px;
    border: none;
    border-radius: 999px;
    background: linear-gradient(
        107deg,
        rgba(255, 255, 255, 0.36) 29.59%,
        rgba(255, 255, 255, 0) 160.46%
    );
    backdrop-filter: blur(15px);
    color: #fff;
    font-size: 1.3rem;
    padding: 0 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
}
input {
    background: transparent;
    border: none;
    outline: none;
    color: #fff;
    font-size: 1.3rem;
    width: 100%;
    height: 100%;
}
input::placeholder {
    color: #d8d8d8;
    opacity: 1; 
    font-size: 1.1rem;
}
.search-icon {
    color: #fff;
    opacity: .5;
}
@media screen and (max-width: 500px) {
.input {
    width: 80%;
    min-width: none;
}
.persons-list {
    justify-content: center;
}
}
</style>
