<template>
  <v-app id="body" light>
    <v-app-bar app clipped-left
      color="primary tertiary--text"
    >

      <v-img style="flex-grow:0" :src="require(`@/assets/poppy_transparent.gif`)" contain max-height="50" v-if="$route.name != 'Home'"></v-img>
      <v-app-bar-title align-self="start"><router-link to="/">{{ site_name }}</router-link></v-app-bar-title>

      <v-spacer class="hidden-small-and-up"></v-spacer>
      <NavButtons v-if="$vuetify.breakpoint.mdAndUp && $route.name != 'Home'" />
      <v-spacer></v-spacer>
      <v-btn icon><v-icon>mdi-magnify</v-icon></v-btn>
      <NavButton link="about" icon="mdi-comment-question" color="tertiary"/>

      <template v-slot:extension v-if="$vuetify.breakpoint.smAndDown && $route.name != 'Home'">
        <NavButtons color="tertiary" />
      </template>

    </v-app-bar>

    <!-- Sizes your content based upon application components -->
    <v-main >
      <!-- Provides the application the proper gutter -->
      <v-container fluid>
        <router-view :key="$route.path"></router-view>
      </v-container>
    </v-main>
    <v-footer app
      color="primary tertiary--text">
      &copy; {{ new Date().getFullYear() }} {{ site_name }}
    </v-footer>
  </v-app>
</template>

<script>
import NavButtons from "@/components/NavButtons"
import NavButton from "@/components/NavButton"

export default {
  name: "App",

  components: {
    NavButtons,
    NavButton
  },

  data: () => ({
    site_name: "Poppyland"
  }),
};
</script>

<style>
  #body {
    background-color: var(--v-background-base);
  }

  .v-btn {
    color: var(--v-tertiary-base) !important;
  }

  .router-link-active .v-btn {
    color: var(--v-accent-base) !important;
    border: 1px solid var(--v-accent-base);
  }

  .v-toolbar__title a {
    color: inherit !important;
    text-decoration: none;
  }

  .no-decoration {
    color: inherit !important;
    text-decoration: none;
  }

  .centered {
    margin: auto;
  }

  .small-padding {
    padding: 10px;
  }
</style>
