const functions = require("firebase-functions");


// the firebase admin sdk to access firestore
const admin = require("firebase-admin");

const serviceAccount = require("../functions/key.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://my-fireboard-default-rtdb.asia-southeast1.firebasedatabase.app"
})