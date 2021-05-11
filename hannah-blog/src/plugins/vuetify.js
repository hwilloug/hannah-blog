import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    defaultTheme: 'light',
    options: {
      customProperties: true
    },
    themes: {
      light: {
        //primary: "#DDE5B6", // #E53935
        primary: "#A6808C",
        //secondary: "#6C584C", // #FFCDD2
        secondary: "#706677",
        //accent: "#B797CC", // #3F51B5
        tertiary: "#DECFD3",
        accent: "#A8BBA0",
        background: "#F7F3F3",
        success: '#4CAF50',
        info: '#2196F3',
        warning: '#FB8C00',
        error: '#FF5252'
      },
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
