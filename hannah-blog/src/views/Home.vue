<template>
  <v-container class="d-flex flex-column align-center" height="80vh">
    <v-card
      outlined
      elevation="2"
      width="100%"
      height="80vh"
      class="d-flex flex-column align-content-space-around"
    >
      <h3 class="display-3 centered" style="padding: 10px; text-shadow: 2px 2px 2px black">
        <b><span v-for="word in welcomeMessage" :key="word.text" :style="{color: word.color}">
          {{word.text}}
        </span></b>
      </h3>

      <NavButtons class="centered" />

      <v-img :src="require(`@/assets/poppy_transparent.gif`)" contain max-height="50"></v-img>

      <p class="centered">
        Click one of the buttons above to start browsing.
      </p>

    </v-card>
  </v-container>
</template>

<script>
import NavButtons from "@/components/NavButtons"

export default {
  name: "Home",

  components: {
    NavButtons
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
