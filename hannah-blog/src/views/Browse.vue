<template>
  <v-container class="d-flex flex-column align-center">
    <v-card elevation="2" outlined shaped :min-width="width">
      <v-card-title>{{ category }} Card</v-card-title>
      <v-card-subtitle>subtitle</v-card-subtitle>
      <v-card-text>blah, blah, blah..</v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "Browse",
  props: ["category"],
  computed: {
    width() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs': return "100%"
        case 'sm': return "35rem"
        case 'md': return "40rem"
        case 'lg': return "50rem"
        case 'xl': return "50rem"
      }
      return "100%"
    }
  }
}
</script>
