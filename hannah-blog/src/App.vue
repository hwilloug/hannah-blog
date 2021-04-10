<template>
  <v-app light style="background-color: #FBF9EF">
    <v-app-bar app clipped-left
      color="primary secondary--text"
    >
      <v-toolbar-title><router-link to="/">{{ site_name }}</router-link></v-toolbar-title>
      <v-spacer v-if="$vuetify.breakpoint.smAndUp"></v-spacer>
      <NavButtons v-if="$vuetify.breakpoint.smAndUp" />
      <template v-slot:extension v-if="$vuetify.breakpoint.xsOnly">
        <NavButtons />
      </template>
      <v-spacer></v-spacer>
      <v-btn icon><v-icon>mdi-magnify</v-icon></v-btn>
      <NavButton link="about" icon="mdi-comment-question" />
    </v-app-bar>

    <!--
    <v-navigation-drawer app clipped>
      <v-list-item>
              <v-list-item-content>
                <v-list-item-title class="title">
                  category
                </v-list-item-title>
                <v-list-item-subtitle>
                  subtext
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>

            <v-divider></v-divider>

            <v-list
              dense
              nav
            ></v-list>

    </v-navigation-drawer>
    -->

    <!-- Sizes your content based upon application components -->
    <v-main >
      <!-- Provides the application the proper gutter -->
      <v-container fluid>
        <router-view :key="$route.path"></router-view>
      </v-container>
    </v-main>
    <v-footer app
      color="primary">
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
  .v-btn {
    color: var(--v-secondary-base) !important;
  }

  .router-link-active .v-btn {
    color: var(--v-accent-base) !important;
    border: 1px solid var(--v-accent-base);
  }

  .v-toolbar__title a {
    color: inherit !important;
    text-decoration: none;
  }
</style>
