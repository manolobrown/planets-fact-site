<template>
  <Header :planets="planets" />
  <main>
    <router-view></router-view>
  </main>
</template>

<script>
import Header from "./components/Header.vue";
import data from "../data.json";

export default {
  name: "App",
  components: {
    Header,
  },
  data() {
    return {
      planets: data.planets,
      toggleNavStatus: false,
    };
  },
};
</script>
