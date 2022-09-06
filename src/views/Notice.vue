<template>
  <Table :board="state.boarddata" :headers="state.headers"></Table>
</template>

<script>
import Table from '@/components/common/Table.vue'

import { reactive } from 'vue'
export default {
  name: 'fbNotice',
  components: {
    Table
  },

  setup () {
    const state = reactive({
      boarddata: [
        {
          title: 'test',
          conts: '123145',
          write: 'writer',
          date: 'data'
        }
      ],
      headers: {
        text: 'title',
        write: 'write',
        date: 'date'
      }
    })

    return {
      state
    }
  }
}
</script>

<style>

</style>
