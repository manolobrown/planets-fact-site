<template>
  <Header :planets="planets" />
  <main>
    <Planet />
  </main>
</template>

<script>
import Header from "./components/Header.vue";
import Planet from "./components/Planet.vue";
import data from "../data.json";

export default {
  name: "App",
  components: {
    Header,
    Planet,
  },
  data() {
    return {
      planets: data,
    };
  },
};
</script>
