<template>
  <v-footer app absolute
    color="primary tertiary--text">
    &copy; {{ new Date().getFullYear() }} {{ site_name }}
    <v-spacer></v-spacer>
    <span style="padding-right: 5px">Dark</span><v-switch
      :input-value="false"
      :rules="[toggleDark]"
      inset dense
      color="tertiary"
    ></v-switch>
  </v-footer>
</template>

<script>
export default {
  name: "Footer",

  methods: {
    toggleDark(isDark) {
      this.$vuetify.theme.dark = isDark;
      return true
    }
  }
};
</script>
