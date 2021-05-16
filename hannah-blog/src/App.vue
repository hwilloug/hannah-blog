<template>
  <v-theme-provider root>
  <v-app id="body">

    <NavBar :site_name="site_name" />

    <v-main >
      <v-container fluid>
        <router-view :key="$route.path"></router-view>
      </v-container>
    </v-main>

    <Footer :site_name="site_name" />

  </v-app>
  </v-theme-provider>
</template>

<script>
import NavBar from "@/components/NavBar"
import Footer from "@/components/Footer"

export default {
  name: "App",

  components: {
    NavBar,
    Footer
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
