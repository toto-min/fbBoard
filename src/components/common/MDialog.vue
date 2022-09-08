<template>
  <v-card>
    <v-spacer></v-spacer>
    <v-list-item>
      <v-btn @click="addMenu" icon>
      <v-icon>
        mdi-content-save
      </v-icon>
    </v-btn>
    </v-list-item>
    <v-list-item>
      <v-text-field
        label="menuTitle"
        hide-details="auto"
        v-model="state.title"
      >
      </v-text-field>
    </v-list-item>
  </v-card>
</template>

<script>
import { reactive, onMounted } from 'vue'
export default {
  name: 'fbMenuDialog',
  props: {
    title: String
  },

  setup (props, { emit }) {
    const state = reactive({
      title: ''
    })

    onMounted(() => {
      titled()
    })

    function titled () {
      state.title = props.title
    }

    function addMenu () {
      emit('addMenu', state.title)
    }

    return {
      state,
      addMenu,
      titled
    }
  }
}
</script>

<style lang="scss" scoped>
.v-card {
    height: 400px !important;
    position: fixed;
    top: 50%;
    left: 50%;
    z-index: 555;
    transform: translate(-50%, -50%);
}
</style>
