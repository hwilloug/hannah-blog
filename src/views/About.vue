<template>
  <v-container class="d-flex flex-column align-center align-md-end">
    <v-card
      outlined shaped
      elevation="2"
      :width="$vuetify.breakpoint.smAndUp ? '35rem' : '100%'"
      color="secondary--text"
    >
      <v-card-title class="title">About Me</v-card-title>
      <v-card-text>
        <p>
          Hello, and welcome to my blog! I'm Hannah, and this is where I write about the stuff I do. Currently, I live in Fort Mill, SC with my three cats. I like to keep myself busy by keeping up with a multitude of hobbies, which include cooking, gardening, needle arts, coding, reading, and learning Japanese.
        </p>
        <p>
          Find me on:
          <v-list dense >
            <v-list-item
              v-for="link in links" :key="link.name"
              :href="link.link" target="_blank"
            >
              <v-list-item-icon>
                <v-icon color="secondary">{{ link.icon }}</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                {{ link.name }}
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </p>
        <v-img
          :src="require(`@/assets/family_photo.png`)"
          alt="A picture of my cats."
          style="border: 5px solid var(--v-secondary-base); margin: 20px;"
        ></v-img>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    links: [
      {
        name: "GitHub",
        link: "https://github.com/hwilloug",
        icon: "mdi-github"
      },
      {
        name: "LinkedIn",
        link: "https://www.linkedin.com/in/hannah-willoughby-6a8664160/",
        icon: "mdi-linkedin"
      },
      {
        name: "Goodreads",
        link: "https://www.goodreads.com/hannah218",
        icon: "mdi-goodreads"
      },
      {
        name: "HannahWilloughby.dev",
        link: "https://hannahwilloughby.dev",
        icon: "mdi-web"
      }
    ]
  })
}
</script>
