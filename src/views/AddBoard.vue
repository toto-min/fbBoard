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
export default {
  setup () {
    const state = reactive({
      rules: [
        value => !!value || 'Required.',
        value => (value && value.length >= 3) || 'Min 3 characters'
      ]
    })

    return {
      state
    }
  }

}
</script>

<style>

</style>
