<template>
  <v-footer 
    app
    absolute
    color="primary tertiary--text"
  >
    <BuyMeABook />
    <v-spacer />
    &copy; {{ new Date().getFullYear() }} {{ site_name }}
    <v-spacer />
    <span style="padding-right: 5px">Dark</span><v-switch
      :input-value="false"
      :rules="[toggleDark]"
      inset dense
      color="tertiary"
    ></v-switch>
  </v-footer>
</template>

<script>
import BuyMeABook from './BuyMeABook.vue';

export default {
    name: "Footer",
    props: ["site_name"],
    methods: {
        toggleDark(isDark) {
            this.$vuetify.theme.dark = isDark;
            return true;
        }
    },
    components: { BuyMeABook }
};
</script>
