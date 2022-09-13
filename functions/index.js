const functions = require("firebase-functions");


// the firebase admin sdk to access firestore
const admin = require("firebase-admin");

const serviceAccount = require("key.json");
const { createUserWithEmailAndPassword, getAuth } = require("firebase/auth");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://my-fireboard-default-rtdb.asia-southeast1.firebasedatabase.app"
});

const db = admin.database()

exports.sendWelcomeEmail = functions.auth.user().onCreate((user) => {
    const { email, uid, displayName, photoURL} = user
    const u = {
        email,
        displayName,
        photoURL,
        createAt: new Date()
    }
    db.ref('users').child(uid).set(u)
})

exports.sendByeEmail = functions.auth.user().onDelete((user) => {
    const {uid} = user
    const u = uid

    db.ref('users').child(uid).remove()
})