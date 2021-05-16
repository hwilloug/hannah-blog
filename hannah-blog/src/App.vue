<template>
  <v-theme-provider root>
  <v-app id="body">

    <NavBar :site_name="site_name" />

    <v-main>
      <v-container fluid>
        <v-row no-gutters>
          <v-col cols="12" md="8">
            <router-view :key="$route.path"></router-view>
          </v-col>
          <v-col>
            <Aside />
          </v-col>
        </v-row>
      </v-container>
    </v-main>

    <Footer :site_name="site_name" />

  </v-app>
  </v-theme-provider>
</template>

<script>
import NavBar from "@/components/NavBar"
import Footer from "@/components/Footer"
import Aside from "@/components/Aside"

export default {
  name: "App",

  components: {
    NavBar,
    Footer,
    Aside
  },

  data: () => ({
    site_name: "Poppyland"
  })

};
</script>

<style>
  #body {
    background-color: var(--v-background-base);
  }

  #app-title {
    color: var(--v-tertiary-base) !important;
    text-decoration: none;
  }

  .v-btn {
    color: var(--v-tertiary-base) !important;
  }

  #nav-button.router-link-active .v-btn {
    color: var(--v-accent-base) !important;
    border: 1px solid var(--v-accent-base);
  }

  .v-toolbar__title a {
    color: inherit !important;
    text-decoration: none;
  }

  .v-card__text, .v-card__title {
    word-break: normal;
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

  .medium-padding {
    padding: 20px;
  }

</style>
