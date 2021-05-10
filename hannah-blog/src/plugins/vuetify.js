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
        primary: "#DDE5B6", // #E53935
        secondary: "#6C584C", // #FFCDD2
        accent: "#B797CC", // #3F51B5
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
