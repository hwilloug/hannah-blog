<template>
  <v-container class="d-flex flex-column align-center align-md-start">
    <v-card
      outlined shaped
      elevation="2"
      color="secondary--text"
      class="medium-padding"
      :width="$vuetify.breakpoint.mdAndUp ? '17rem' : '100%'"
    >
      <h2>Welcome to Poppyland</h2>
      <p>
        Hello, and welcome to my blog! I'm Hannah, and this is where I write about the stuff I do outside of work.
      </p>
      <router-link :to="{ name: `About`}"><v-btn
        rounded
        color="secondary white--text"
        small
      >More about me</v-btn></router-link>
    </v-card>
  </v-container>
</template>
