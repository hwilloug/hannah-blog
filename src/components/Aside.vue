<template>
  <v-container class="d-flex flex-column align-center align-md-start">
    <v-card
      outlined shaped
      elevation="2"
      color="secondary--text"
      class="medium-padding aside-card"
      :width="$vuetify.breakpoint.mdAndUp ? '17rem' : '100%'"
    >
      <h2 class="text-h4">Welcome to Poppyland Blog</h2><br>
      <p>
        Hello, and welcome to my blog! I'm Hannah, and this is where I write about the stuff I do outside of work.
      </p>
      <router-link :to="{ name: `About`}"><v-btn
        rounded
        color="secondary white--text"
        small
      >More about me</v-btn></router-link>
    </v-card>

    <v-card
      outlined shaped
      elevation="2"
      color="secondary--text"
      class="medium-padding aside-card"
      :width="$vuetify.breakpoint.mdAndUp ? '17rem' : '100%'"
    >
     <h5 class="text-h5">2023 Reading Goal</h5>
     <v-progress-linear
      height="25"
      :value="readingProgress"
      rounded
      color="secondary"
     >
      <template v-slot:default="{value}"> 
        <span style="color: white">{{ value }}%</span>
      </template>
     </v-progress-linear> 
     <a href="https://www.goodreads.com/user_challenges/40928984" target="_blank">{{ readingComplete }}/{{ readingGoal }} books</a>
    </v-card>
  </v-container>
</template>

<script>

export default {
  data: () => ({
    readingGoal: 50,
    readingComplete: 50,
    readingProgress: 0
  }),
  mounted() {
      this.readingProgress = this.readingComplete / this.readingGoal * 100
  }
}

</script>


<style scoped>
.aside-card {
  margin-bottom: 20px;
}
</style>