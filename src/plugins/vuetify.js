import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    dark: false,
    options: {
      customProperties: true
    },
    themes: {
      light: {
        primary: "#9B6F7C",
        secondary: "#706677",
        tertiary: "#DECFD3",
        accent: "#A8BBA0",
        background: "#F7F3F3",
        success: '#4CAF50',
        info: '#2196F3',
        warning: '#FB8C00',
        error: '#FF5252'
      },
      dark: {
        primary: "#231A1E",
        secondary: "#BEB1C7",
        tertiary: "#D0B3BA",
        accent: "#A8BBA0",
        background: "#3F3842",
        success: '#4CAF50',
        info: '#2196F3',
        warning: '#FB8C00',
        error: '#FF5252'
      }
    },
  },
  breakpoint: {
    thresholds: {
      xs: 320,
      sm: 640,
      md: 800,
      lg: 1280
    }
  }
})
