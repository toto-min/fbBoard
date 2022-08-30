<template>
  <v-footer app padless absolute>
    <v-col
      class="text-center"
      cols="12"
    >
      {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
    </v-col>
  </v-footer>
</template>

<script>
export default {
  name: 'FbFooter'
}
</script>

<style>

</style>
