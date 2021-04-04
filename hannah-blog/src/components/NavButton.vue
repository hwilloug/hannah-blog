<template>
  <router-link :to="link">
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
