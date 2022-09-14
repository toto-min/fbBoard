const functions = require("firebase-functions");


// the firebase admin sdk to access firestore
const admin = require("firebase-admin");

const serviceAccount = require("./key.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://my-fireboard-default-rtdb.asia-southeast1.firebasedatabase.app"
})

const db = admin.database()

exports.createUser = functions.auth.user().onCreate(async (user) => {
  const {uid, email, displayName, photoURL} = user
  const u = {
    email,
    displayName,
    photoURL
  }

  db.ref('users').child(uid).set(u)
})

exports.deleteUser = functions.auth.user().onDelete(async (user) => {
  const {uid} = user
  db.ref('users').child(uid).remove()
})