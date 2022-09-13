<template>
  <div class="nav">
    <v-navigation-drawer
    class="bg-deep-white"
    theme="white"
    app
    permanent
    >
    <v-list color="transparent">
        <v-list-item v-for="nav in state.item" :key="nav">
            <router-link :to="{name: nav.name, query: {id: nav.query.id}}">{{nav.text}}</router-link>
            <!-- <v-btn icon x-small> -->
            <!-- </v-btn> -->
        </v-list-item>
        <v-list-item v-for="(na, i) in state.nav" :key="i">
          <router-link :to="{name: na.name, query: {id: na.query.id}}">
            {{na.text}}
          </router-link>
          <v-icon x-small @click="navedit(i)">mdi-pencil</v-icon>
          <v-icon color="red" x-small @click="navdel(i)">mdi-close</v-icon>
        </v-list-item>
        <!-- <v-btn > -->
        <v-spacer></v-spacer>
        <v-list-item @click="state.dialog = true">
          <v-icon>mdi-plus</v-icon>ADD
        </v-list-item>
        <!-- </v-btn> -->
    </v-list>
    </v-navigation-drawer>
    <MDialog @addMenu="navedited" v-if="state.dialogedit" :title="state.nav[state.num].text"></MDialog>
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
  child,
  push,
  update,
  remove
} from 'firebase/database'

class Addpath {
  constructor (text, key) {
    this.name = 'AddText'
    this.path = '/add'
    this.text = text
    this.query = {
      id: text
    }
    this.key = key
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
      nav: [],
      num: 0
    })

    onMounted(() => {
      // save()
      read()
    })

    function save () {
      const db = getDatabase()
      set(ref(db, 'menu/'), { item: state.nav })
    }

    function read () {
      const db = getDatabase()
      const navmenu = ref(db, 'menu/item')

      onValue(navmenu, (snapshot) => {
        state.nav = snapshot.val()
      })
    }

    function navupdate (title) {
      const db = getDatabase()
      const newKey = push(child(ref(db), 'main/item')).key
      const postData = new Addpath(title, newKey)
      const updates = {}
      updates['menu/item/' + newKey] = postData

      state.dialog = false
      save()
      return update(ref(db), updates)
    }

    function navedit (i) {
      state.dialogedit = true
      state.num = i
    }

    function navedited (title) {
      const db = getDatabase()
      const newKey = state.nav[state.num].key
      const postData = new Addpath(title, newKey)

      const updates = {}

      updates['menu/item/' + newKey] = postData
      state.dialogedit = false
      save()
      return update(ref(db), updates)
    }

    function navdel (i) {
      const db = getDatabase()
      remove(ref(db, 'menu/item/' + i))
    }

    return {
      state,
      // save,
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
