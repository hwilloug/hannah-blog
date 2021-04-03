<template>
  <v-app style="background-color: #EAE6EF">
    <v-app-bar app
      color="primary">
      <v-toolbar-title>Willowtree Hobbies</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-pot-steam</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-flower</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-content-cut</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-code-json</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-book-open-variant</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-syllabary-hiragana</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-comment-question</v-icon>
      </v-btn>
    </v-app-bar>

    <!-- Sizes your content based upon application components -->
    <v-main >
      <!-- Provides the application the proper gutter -->
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-main>
    <v-footer app
      color="primary">
      &copy; {{ new Date().getFullYear() }} Willowtree Hobbies
    </v-footer>
  </v-app>
</template>

<script>

export default {
  name: "App",

  components: {
  },

  data: () => ({
    //
  }),
};
</script>
