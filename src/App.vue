<template>
  <v-app>
    <Header :draw="state.draw" @dropmenu="dropMenu"></Header>
    <Nav v-if="state.draw"></Nav>
    <v-main>
      <router-view/>
    </v-main>
    <Footer></Footer>
  </v-app>
</template>

<script>
import Header from './components/common/Header.vue'
import Footer from './components/common/Footer.vue'
import Nav from './components/common/Nav.vue'

import { reactive } from 'vue'
export default {
  name: 'App',
  components: {
    Header,
    Footer,
    Nav
  },
  setup () {
    const state = reactive({
      draw: false
    })

    function dropMenu () {
      if (state.draw) {
        state.draw = false
      } else {
        state.draw = true
      }
    }
    return {
      state,

      dropMenu
    }
  }
}
</script>
