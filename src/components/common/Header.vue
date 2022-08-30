<template>
    <v-app-bar>
        <template v-slot:prepend>
          <v-app-bar-nav-icon @click="menudrop"></v-app-bar-nav-icon>
        </template>
        <v-app-bar-title>Title</v-app-bar-title>

        <v-spacer></v-spacer>

        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-heart</v-icon>
        </v-btn>
        <v-btn icon>
            <v-icon>mdi-email</v-icon>
        </v-btn>
    </v-app-bar>
</template>

<script>
// import { reactive, watch } from 'vue'

export default {
  name: 'FbHeader',

  props: {
    draw: Boolean
  },

  setup (props, { emit }) {
    function menudrop () {
      emit('dropmenu')
    }

    return {
      menudrop
    }
  }

}
</script>

<style lang="scss" scoped>
// ::v-deep .v-btn__content {
//     width: 100%;
//     height: 100%;
// }
// a {
//     display: block;
//     width: 100%;
//     height: 100%;

//     color: #ffffff;
//     text-decoration: none;

//     line-height: 350%;
// }

</style>
