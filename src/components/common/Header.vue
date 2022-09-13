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
        <!-- <v-btn icon href="mailto:toto_min4016@naver.com">
            <v-icon>mdi-email</v-icon>
        </v-btn> -->
        <Dropbox></Dropbox>
    </v-app-bar>
</template>

<script>
// import { reactive, watch } from 'vue'
import Dropbox from '@/components/common/Dropdown.vue'
// import firebase from 'firebase'
export default {
  name: 'FbHeader',
  components: {
    Dropbox
  },
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
// .d-flex {
//   position: fixed;
//   top: 50%;
//   left: 50%;
// }
</style>
