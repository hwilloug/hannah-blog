<template>
  <v-app-bar app clipped-left absolute
    color="primary tertiary--text"
  >

    <v-img style="flex-grow:0" :src="require(`@/assets/poppy_transparent.gif`)" contain max-height="50" v-if="$route.name != 'Home'"></v-img>
    <h3 class="title" align-self="start"><router-link to="/" id="app-title">{{ site_name }}</router-link></h3>

    <v-spacer class="hidden-small-and-up"></v-spacer>
    <NavButtons v-if="$vuetify.breakpoint.mdAndUp && $route.name != 'Home'" />
    <v-spacer></v-spacer>
    <v-btn icon><v-icon>mdi-magnify</v-icon></v-btn>
    <NavButton link="about" icon="mdi-comment-question" color="tertiary"/>

    <template v-slot:extension v-if="$vuetify.breakpoint.smAndDown && $route.name != 'Home'">
      <NavButtons color="tertiary" />
    </template>

  </v-app-bar>
</template>

<script>
import NavButtons from "@/components/NavButtons"
import NavButton from "@/components/NavButton"

export default {
  name: "NavBar",
  props: ["site_name"],

  components: {
    NavButtons,
    NavButton
  }
}

</script>
