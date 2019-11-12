<template>
  <v-footer
    :color="darkMode ? 'darkgray' : 'indigo'"
    :dark="darkMode"
    height="auto" app fixed row justify-center>
      <v-container row justify-space-between>
      <span class="white--text">&copy; 2018</span>
      <v-spacer></v-spacer>
      </v-container>
    </v-footer>
</template>
<script>
export default {
  name: 'Footer',
  computed: {
    darkMode() {
      return this.$store.getters.isDarkMode;
    },
  },
};
</script>
<style lang="scss">
  .footer{
    justify-content: center;
  div {
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-bottom: 0px;
    align-items: center;
  }
}
</style>
