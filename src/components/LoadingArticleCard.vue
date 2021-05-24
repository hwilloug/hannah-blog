<template>
  <v-card
    outlined shaped
    elevation="2"
    style="margin: 0px auto 10px auto;"
    :width="$vuetify.breakpoint.mdAndUp ? '39rem' : '90vw'"
    color="secondary--text"
  >
    <v-container v-if="$vuetify.breakpoint.mdAndUp">
      <v-row align="center">
        <v-col cols="auto" max-width="20rem">
          <v-skeleton-loader
            width="10rem"
            type="image"
          ></v-skeleton-loader>
        </v-col>
        <v-col>
          <v-card-title><v-skeleton-loader type="card-heading"></v-skeleton-loader></v-card-title>
          <v-card-subtitle><v-skeleton-loader type="text"></v-skeleton-loader><br><v-skeleton-loader type="text"></v-skeleton-loader></v-card-subtitle>
          <v-skeleton-loader type="chip"></v-skeleton-loader>
        </v-col>
      </v-row>
    </v-container>
    <v-container v-else>
      <v-skeleton-loader
        :width="$parent.$el.offsetWidth"
        type="image"
      ></v-skeleton-loader>
      <v-card-title><v-skeleton-loader type="card-heading"></v-skeleton-loader></v-card-title>
      <v-card-subtitle><v-skeleton-loader type="text"></v-skeleton-loader><br><v-skeleton-loader type="text"></v-skeleton-loader></v-card-subtitle>
    </v-container>
  </v-card>
</template>

<script>
export default {
  name: "LoadingArticleCard",
}
</script>
