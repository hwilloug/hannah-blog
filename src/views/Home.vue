<template>
  <v-container class="d-flex flex-column align-center" height="80vh">
    <v-card
      outlined
      elevation="2"
      width="100%"
      class="d-flex flex-column align-content-space-around small-padding"
    >
      <h3 class="centered" id="welcome-banner" :class="$vuetify.breakpoint.sm ? 'text-h4' : 'text-h3'">
        <b><span v-for="word in welcomeMessage" :key="word.text" :style="{color: word.color}">
          {{word.text}}
        </span></b>
      </h3>

      <NavButtons class="centered" color="secondary" style="margin-bottom: 20px;"/>

      <v-img :src="require(`@/assets/poppy_transparent.gif`)" contain max-height="50"></v-img>

    </v-card>

    <div id="latest-articles">
      <Browse :articlesPerPage="5" :title="'Latest articles:'" :showBackButton="false"/>
    </div>
  </v-container>
</template>

<script>
import NavButtons from "@/components/NavButtons"
import Browse from "@/views/Browse"

export default {
  name: "Home",

  components: {
    NavButtons,
    Browse
  },

  data: () => ({
    colors: ['salmon', 'sandybrown', 'khaki', 'lightblue', 'thistle'],
    welcomeMessage: [
      {
        text: "Welcome ",
        color: 'salmon'
      },
      {
        text: "to ",
        color: 'sandybrown'
      },
      {
        text: "Poppyland",
        color: 'khaki'
      },
      {
        text: "Blog",
        color: "lightblue"
      }
    ]
  }),

  mounted: function() {
    this.cycleColors()
  },

  methods: {
    cycleColors: function() {
      let color_id = 0
      this.$nextTick(function() {
        window.setInterval(() => {
          for (let i = 0; i < this.welcomeMessage.length; i++) {
            this.welcomeMessage[i].color = this.colors[color_id % this.colors.length]
            color_id++
          }
        }, 1000)
      })
    }
  }
};
</script>

<style scoped>
#welcome-banner {
  text-shadow: 2px 2px 2px black; 
  text-align: center;
  margin: 40px;
  word-wrap: normal;
}

#latest-articles { 
  margin-top: 30px;
}
</style>