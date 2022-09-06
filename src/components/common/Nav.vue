<template>
  <div class="nav">
    <v-navigation-drawer
    class="bg-deep-white"
    theme="white"
    app
    permanent
    >
    <v-list color="transparent">
        <v-list-item v-for="(nav, i) in state.item" :key="nav">
            <router-link :to="{name: nav.name, query: {id: nav.query.id}}">{{nav.text}}</router-link>
            <!-- <v-btn icon x-small> -->
            <v-icon x-small @click="navedit(i)">mdi-pencil</v-icon>
            <v-icon color="red" x-small @click="navdel">mdi-close</v-icon>
            <!-- </v-btn> -->
        </v-list-item>
        <!-- <v-btn > -->
        <v-spacer></v-spacer>
        <v-list-item @click="state.dialog = true">
          <v-icon>mdi-plus</v-icon>ADD
        </v-list-item>
        <!-- </v-btn> -->
    </v-list>
    </v-navigation-drawer>
    <MDialog @addMenu="navedited" v-if="state.dialogedit" :title="state.item[state.num].text"></MDialog>
    <MDialog @addMenu="navupdate" v-if="state.dialog"></MDialog>
  </div>
</template>

<script>
import MDialog from '@/components/common/MDialog'

import { reactive, onMounted } from 'vue'
import {
  getDatabase,
  ref,
  set,
  onValue,
  // child,
  // push,
  update
} from 'firebase/database'

class Addpath {
  constructor (text) {
    this.name = 'AddText'
    this.path = '/add'
    this.text = text
    this.query = {
      id: text
    }
  }
}
export default {
  name: 'FbNav',
  components: {
    MDialog
  },
  setup () {
    const state = reactive({
      dialog: false,
      dialogedit: false,
      item: [
        {
          name: 'Main',
          path: '/',
          text: 'MAIN',
          query: {
            id: 'main'
          }
        },
        {
          name: 'Board',
          path: '/board',
          text: 'BOARD',
          query: {
            id: 'board'
          }
        },
        {
          name: 'Notice',
          path: '/notice',
          text: 'NOTICE',
          query: {
            id: 'notice'
          }
        }
      ],
      num: 0
    })

    onMounted(() => {
      save()
      read()
    })

    function save () {
      const db = getDatabase()
      set(ref(db, 'menu/'), { item: state.item })
    }

    function read () {
      const db = getDatabase()
      const navmenu = ref(db, 'menu/item')

      onValue(navmenu, (snapshot) => {
        state.item = snapshot.val()
      })
    }

    function navupdate (title) {
      const db = getDatabase()
      const postData = new Addpath(title)
      const newKey = state.item.length
      const updates = {}
      updates['menu/item/' + newKey] = postData

      state.dialog = false
      return update(ref(db), updates)
    }

    function navedit (i) {
      state.dialogedit = true
      state.num = i
    }

    function navedited (title) {
      const db = getDatabase()
      const postData = new Addpath(title)
      const newKey = state.num

      const updates = {}

      updates['menu/item/' + newKey] = postData
      state.dialogedit = false
      return update(ref(db), updates)
    }

    function navdel () {}

    return {
      state,
      save,
      read,
      navupdate,
      navedit,
      navedited,
      navdel
    }
  }
}
</script>

<style lang="scss" scoped>
.v-card {
    width: 450px;
    height: 100vh;
}

a{
    text-decoration: none;
    color: #000000;
}

</style>
