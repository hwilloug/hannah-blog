import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

import colors from 'vuetify/lib/util/colors'


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
        accent: colors.indigo.base, // #3F51B5
        success: '#4CAF50',
        info: '#2196F3',
        warning: '#FB8C00',
        error: '#FF5252'
      },
    },
  },
})
