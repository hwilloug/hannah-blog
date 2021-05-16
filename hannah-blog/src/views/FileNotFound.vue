<template>
  <v-container class="d-flex flex-column align-center align-md-end" height="80vh">
    <v-card
      outlined
      elevation="2"
      width="100%"
      height="80vh"
      class="d-flex flex-column align-content-space-around small-padding"
    >
      <container class="centered">
        <h1 class="display-3"><v-img :src="require(`@/assets/fish_animation.gif`)" contain max-height="100"></v-img>404 - OOPS</h1>
        <h2>The page you are looking for does not exist...</h2>
      </container>

    </v-card>
  </v-container>
</template>
