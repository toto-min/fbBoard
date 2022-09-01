<template>
  <div class='board'>
    <div class="createbtn">
      <v-btn icon @click="writeDR">
       <v-icon>mdi-pencil</v-icon>
    </v-btn>
    </div>
    <!-- <v-btn icon>
      <p @click="realtime">real</p>
    </v-btn>
    <v-btn icon>
      <p @click="readOne">read</p>
    </v-btn> -->
    <Table :board='state.boarddata' :headers='state.headers'></Table>

    <div class="text-center">
      <v-dialog
        v-model="state.dialog"
      >
        <Dialog :dialog="state.dialog" @dialogCL="writeCL"></Dialog>
      </v-dialog>
    </div>
  </div>
</template>

<script>
import { reactive, onMounted } from 'vue'
import {
  getDatabase,
  ref,
  child,
  get,
  onValue
} from 'firebase/database'
import Dialog from '@/components/common/Dialog.vue'
import Table from '@/components/common/Table.vue'
export default {
  name: 'FbBoard',
  components: {
    Table,
    Dialog
  },
  setup () {
    const state = reactive({
      dialog: false,
      headers:
        {
          text: 'TITLE',
          write: 'WRITER',
          date: 'DATE'
        },
      boarddata: [
      ],

      testlog: 'test',
      logdata: []
    })

    onMounted(() => {
      realtime()
      // readOne()
    })

    function writeDR () {
      if (state.dialog) {
        state.dialog = false
      } else {
        state.dialog = true
      }
    }
    function writeCL () {
      if (state.dialog) {
        state.dialog = false
      }
    }
    function realtime () {
      const db = getDatabase()
      const testRef = ref(db, 'board/')
      onValue(testRef, (snapshot) => {
        const data = snapshot.val()
        state.boarddata = data
      })
    }
    async function readOne () {
      const dbRef = await ref(getDatabase())
      get(child(dbRef, 'test')).then((snapshot) => {
        if (snapshot.exists()) {
          state.logdata = snapshot.val()
        } else {
          console.log('No data available')
        }
      }).catch((error) => {
        console.error(error)
      })
    }

    return {
      state,
      writeDR,
      writeCL,
      realtime,
      readOne
    }
  }
}
</script>

<style>

</style>
