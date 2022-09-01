import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getDatabase } from 'firebase/database'
import firebaseConfig from '../../firebaseConfig'

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
const database = getDatabase(app)

export default {
  app,
  db,
  database
}
