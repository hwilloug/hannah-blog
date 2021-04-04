<template>
  <v-app light style="background-color: #FBF9EF">
    <v-app-bar app
      color="primary secondary--text">
      <v-toolbar-title>{{ site_name }}</v-toolbar-title>
      <v-spacer></v-spacer>
      <NavButton link="food" icon="mdi-pot-steam" />
      <NavButton link="gardening" icon="mdi-flower" />
      <NavButton link="crafts" icon="mdi-content-cut" />
      <NavButton link="coding" icon="mdi-code-json" />
      <NavButton link="books" icon="mdi-book-open-variant" />
      <NavButton link="lanugages" icon="mdi-syllabary-hiragana" />
      <v-spacer></v-spacer>
      <NavButton link="#" icon="mdi-magnify" />
      <NavButton link="about" icon="mdi-comment-question" />
    </v-app-bar>

    <!-- Sizes your content based upon application components -->
    <v-main >
      <!-- Provides the application the proper gutter -->
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-main>
    <v-footer app centered
      color="primary">
      &copy; {{ new Date().getFullYear() }} {{ site_name }}
    </v-footer>
  </v-app>
</template>

<script>
import NavButton from "@/components/NavButton"

export default {
  name: "App",

  components: {
    NavButton
  },

  data: () => ({
    site_name: "Poppyland"
  }),
};
</script>

<style>
  .v-btn {
    color: var(--v-secondary-base) !important;
  }

  .router-link-active {
    color: var(--v-accent-base) !important;
  }
</style>
