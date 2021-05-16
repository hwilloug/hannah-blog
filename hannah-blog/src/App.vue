<template>
  <v-theme-provider root>
  <v-app id="body">
    <v-app-bar app clipped-left absolute
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
    <v-footer app absolute
      color="primary tertiary--text">
      &copy; {{ new Date().getFullYear() }} {{ site_name }}
      <v-spacer></v-spacer>
      <span style="padding-right: 5px">Dark</span><v-switch
        :input-value="false"
        :rules="[toggleDark]"
        inset dense
        color="tertiary"
      ></v-switch>
    </v-footer>
  </v-app>
  </v-theme-provider>
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

  methods: {
    toggleDark(isDark) {
      console.log(isDark)
      this.$vuetify.theme.dark = isDark;
      return true
    }
  }
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
