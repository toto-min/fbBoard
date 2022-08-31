<template>
  <div class="board">
    <Table :board="state.boarddata" :headers="state.headers"></Table>
  </div>
</template>

<script>
import { reactive } from 'vue'
import Table from '@/components/common/Table.vue'
export default {
  name: 'FbBoard',
  components: {
    Table
  },
  setup () {
    const state = reactive({
      headers:
        {
          text: 'TITLE',
          write: 'WRITER',
          date: 'DATE'
        },
      boarddata: [
        {
          id: 1,
          title: 'testtitle',
          write: 'wirter',
          date: '2022-08-30'
        },
        {
          id: 2,
          title: 'testtitle222',
          write: 'writer22',
          date: '2022-08-30'
        },
        {
          id: 3,
          title: 'testtitle333',
          write: 'writer214',
          date: '2022-08-31'
        }
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
