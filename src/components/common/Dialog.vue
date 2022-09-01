<template>
  <v-card>
    <v-text-field
      label="TITLE"
      :rules="state.rules"
      hide-details="auto"
      v-model="state.title"
    ></v-text-field>
    <v-text-field
      label="WRITER"
      :rules="state.rules"
      hide-details="auto"
      v-model="state.write"
    ></v-text-field>
    <v-textarea
        solo
        name="input-7-4"
        label="Solo textarea"
        v-model="state.conts"
    ></v-textarea>

    <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn @click="addData" color="primary">add</v-btn>
        <v-btn @click="dialogCl">Close</v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>

import { reactive } from 'vue'

// import { getDatabase, ref, set } from 'firebase/database'
import { addboard } from '@/api/board.js'
export default {
  name: 'fbDialog',
  props: {
    dialog: Boolean
  },

  setup (props, { emit }) {
    // const db = getDatabase()
    const state = reactive({
      rules: [
        value => !!value || 'Required.',
        value => (value && value.length >= 3) || 'Min 3 characters'
      ],

      addboard: [],
      title: '',
      write: '',
      conts: '',
      date: ''
    })

    function addData () {
      const year = new Date().getFullYear()
      const month = new Date().getMonth()
      const day = new Date().getDay()
      const hour = new Date().getHours()
      const minuet = new Date().getMinutes()

      const boardate = year + '-' + month + '-' + day + '-' + hour + '-' + minuet
      const params = [
        {
          title: state.title,
          write: state.write,
          conts: state.conts,
          date: boardate
        }
      ]

      addboard(params)
      dialogCl()
    }

    function dialogCl () {
      if (props.dialog) {
        emit('dialogCL')
      }
    }

    return {
      state,
      addData,
      dialogCl
    }
  }
}
</script>

<style lang="scss" scoped>
.v-input {
    width: 500px;
}
</style>
