<template>
  <div class='board'>
    <div class="createbtn">
      <!-- <v-btn icon @click="writeDR">
       <v-icon>mdi-pencil</v-icon>
      </v-btn> -->
      <v-btn icon>
        <router-link :to="{name: 'Addboard'}">
          <v-icon>mdi-pencil</v-icon>
        </router-link>
      </v-btn>
    </div>
    <!-- <v-btn icon>
      <p @click="realtime">real</p>
    </v-btn>
    <v-btn icon>
      <p @click="readOne">read</p>
    </v-btn> -->
    <Table :board='state.boarddata' :headers='state.headers' @boardDtail="detailview"></Table>
<!--
    <div class="text-center">
      <v-dialog
        v-model="state.dialog"
      >
        <Dialog :dialog="state.dialog" @dialogCL="writeCL"></Dialog>
      </v-dialog>
    </div> -->
  </div>
</template>

<script>
import { reactive, onMounted } from 'vue'
import { useRouter } from 'vue-router'
// import Dialog from '@/components/common/Dialog.vue'
import Table from '@/components/common/Table.vue'
import { getboard } from '@/api/board.js'
export default {
  name: 'FbBoard',
  components: {
    Table
    // Dialog
  },
  setup () {
    const router = useRouter()
    const state = reactive({
      dialog: false,
      headers:
        {
          text: 'TITLE',
          write: 'WRITER',
          date: 'DATE'
        },
      boarddata: [
        // {
        //   title: 'test',
        //   write: 'writer',
        //   conts: 'testdater conts',
        //   date: '2022-09-04'
        // }
      ],

      testlog: 'test',
      logdata: [],

      dataparam: []
    })

    onMounted(() => {
      readOne()
    })

    function detailview (i) {
      getboard()
        .then((data) => {
          console.log(i)
          // if (data.id === i) {
          router.push({ name: 'BoardDetail', path: '/boardDetail', query: { id: data.id } })
          // }
        }).catch((err) => {
          console.log(err)
        })
    }

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
    async function readOne () {
      // const dbRef = await ref(getDatabase())
      // get(child(dbRef, 'test')).then((snapshot) => {
      //   if (snapshot.exists()) {
      //     state.logdata = snapshot.val()
      //   } else {
      //     console.log('No data available')
      //   }
      // }).catch((error) => {
      //   console.error(error)
      // })

      getboard()
        .then((data) => {
          state.boarddata = [
            ...state.boarddata,
            {
              id: data.id,
              title: data.title,
              write: data.write,
              conts: data.conts,
              date: data.date
            }]
        }).catch((err) => {
          console.log(err)
        })
    }

    return {
      state,
      detailview,
      writeDR,
      writeCL,
      readOne
    }
  }
}
</script>

<style>

a {
  text-decoration: none;
  color: #000000;
}

</style>
