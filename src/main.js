import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBa_ag8KakQI9IJqR1sl-Z3Tvwy6ve5J_w',
  authDomain: 'my-fireboard.firebaseapp.com',
  databaseURL: 'https://my-fireboard-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'my-fireboard',
  storageBucket: 'my-fireboard.appspot.com',
  messagingSenderId: '290672444068',
  appId: '1:290672444068:web:64ae7566a25734f4591c31'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

loadFonts()

createApp(App)
  .use(router)
  .use(store)
  .use(vuetify)
  .use(app)
  .mount('#app')
