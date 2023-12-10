<template>
  <div class="hero">
    <div class="container">
      <div class="left">
        <h1>Welcome to the <br /> House of Thrones</h1>
        <p>The Royal Princess" is a captivating drama that delves into the life of Princess Isabella, the heir to a prestigious European throne. </p>
        <div class="input">
          <input type="text" placeholder="Search for a house" @input="filterFunction($event.target.value)" />
          <CIcon :icon="cilZoom" width="26" customClassName="search-icon"/>
        </div>
      </div>
      <div class="right">
        <img src="../../../public/img/hero.png" alt="hero" />
      </div>
    </div>
  </div>
</template>

<script>
import { cilZoom } from '@coreui/icons';
import { CIcon } from '@coreui/icons-vue';

export default {
  name: "HelloWorld",
  components: { CIcon },
    setup() {
        return { cilZoom }
    },
  props: {
    filterFunction: Function,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  margin-bottom: 20px;
}

.hero {
  width: 100%;
  height: fit-content;
  display: flex;
  align-items: center;
  height: 850px;
  justify-content: center;
  position: relative;
}
.hero .container {
  width: 40%;
  text-align: start;
  display: flex;
  align-items: center;
  width: 85%;
}
.hero .container .left {
  z-index: 1;
}
.hero .container .left p {
  font-size: 1.2rem;
  opacity: .7;
  width: 60%;
  margin-bottom: 40px;
}
.hero .container .left button {
  text-transform: uppercase;
  font-weight: 700;
  font-size: .9rem;
}
.hero .container .right {
  position: absolute;
  right: 0;
  top: 0;
  overflow: hidden ;;
  width: 770px;
  height: 819px;
  border-bottom-left-radius: 100px;
}
.hero .container .right img {
  width: auto;
  height: 100%;
  position: relative;
  object-fit: cover;
  left: -35%;
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
    width: 90%;
    min-width: none;
  }
}
</style>
