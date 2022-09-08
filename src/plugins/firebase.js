import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getDatabase } from 'firebase/database'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import firebaseConfig from '../../firebaseConfig'
import store from '@/store'

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
const database = getDatabase(app)
const auth = getAuth(app)

onAuthStateChanged(auth, (user) => {
  if (user) {
    store.commit('setFireUser', user)
  } else {
    console.log(null)
  }
})

export default {
  app,
  db,
  database,
  auth
}
