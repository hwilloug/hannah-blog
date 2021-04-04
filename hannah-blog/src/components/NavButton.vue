<template>
  <router-link :to="{ path: `/${link.toLowerCase()}` }">
    <v-btn icon>
      <v-icon>{{ icon }}</v-icon>
    </v-btn>
  </router-link>
</template>

<script>
export default {
  name: "NavButton",
  props: [
    "link",
    "icon"
  ]
}
</script>
