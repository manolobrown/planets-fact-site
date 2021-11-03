<template>
  <li :class="`nav__item-${planet.name.toLowerCase()}`">
    <router-link
      :to="{ name: 'Planet', params: { id: planet.id } }"
      @click="$emit('nav-status')"
    >
      {{ planet.name }}
    </router-link>
  </li>
</template>

<script>
export default {
  name: "NavItem",
  props: {
    planet: Object,
  },
};
</script>
