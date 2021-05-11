<template>
  <router-link :to="{ path: `/${link}` }">
    <v-btn
      v-if="$route.name == 'Home'"
      text rounded large
      :color="color"
    >
      <span class="multiline-button" >
        <v-icon>{{ icon }}</v-icon><br>
        <v-text class="caption">{{ link }}</v-text>
      </span>
    </v-btn>
    <v-btn icon :color="color" v-else>
        <v-icon>{{ icon }}</v-icon>
    </v-btn>
  </router-link>
</template>

<script>
export default {
  name: "NavButton",
  props: [
    "link",
    "icon",
    "color"
  ]
}
</script>
