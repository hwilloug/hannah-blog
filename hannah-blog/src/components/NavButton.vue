<template>
  <router-link :to="{ path: `/${link}` }">
    <v-btn
      v-if="$route.name == 'Home'"
      text rounded large
    >
      <span class="multiline-button" >
        <v-icon>{{ icon }}</v-icon><br>
        <v-text class="caption">{{ link }}</v-text>
      </span>
    </v-btn>
    <v-btn icon v-else>
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
