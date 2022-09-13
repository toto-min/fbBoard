<template>
  <v-card
    class="mx-auto"
    max-width="344"
    title="SignUp"
  >
    <v-card-item>
      <v-text-field v-model="state.email" :rules="state.emailRules" label="E-mail" required ></v-text-field>
      <v-text-field
            v-model="state.password"
            :append-icon="state.show1 ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[state.rules.required, state.rules.min]"
            :type="state.show1 ? 'text' : 'password'"
            name="input-10-1"
            label="password"
            hint="At least 8 characters"
            counter
            @click:append="state.show1 = !state.show1"
          ></v-text-field>
    </v-card-item>

    <v-card-actions class="bg-blue-darken-2 text-center">
        <v-btn block dark @click="login">
            LOGIN
        </v-btn>
    </v-card-actions>
    <v-card-actions>
        <v-btn block dark @click="googleLG">
            GoogleSignUp
        </v-btn>
    </v-card-actions>

    <v-divider></v-divider>
    <v-card-actions>
        <v-btn block dark @click="SignUp">
            SignUp
        </v-btn>
    </v-card-actions>
    <v-divider></v-divider>
    <v-card-actions class="bg-red-darken-2 text-center">
        <v-btn block @click="logOut">
            LogOut
        </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { reactive } from 'vue'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth'
// import { auth } from '@/plugins/firebase'

import { collection, addDoc, getFirestore } from 'firebase/firestore'

export default {
  name: 'fbSignUp',

  setup () {
    const state = reactive({
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid'
      ],

      show1: false,
      password: '',
      rules: {
        required: value => !!value || 'Required.',
        min: v => v.length >= 8 || 'Min 8 characters',
        emailMatch: () => ("The email and password you entered don't match")
      }
    })

    function login () {
      signInWithEmailAndPassword(getAuth(), state.email, state.password)
        .then((credential) => {
          console.log(credential.user)
        }).catch((err) => {
          console.log(err)
        })
    }

    function SignUp () {
      createUserWithEmailAndPassword(getAuth(), state.email, state.password)
        .then((credential) => {
          const db = getFirestore()
          const docs = collection(db, 'user')
          const users = addDoc(docs, {
            email: credential.user.email,
            uid: credential.user.uid,
            date: new Date()
          })
          console.log(users)
        }).catch((err) => {
          console.log(err)
        })
    }

    function googleLG () {
      const provider = new GoogleAuthProvider()
      signInWithPopup(getAuth(), provider)
        .then((result) => {
          const db = getFirestore()
          const docs = collection(db, 'user')
          const user = addDoc(docs, {
            email: result.user.email,
            uid: result.user.uid,
            date: new Date()
          })
          console.log(user)
        }).catch((err) => {
          console.log(err)
        })
    }

    function logOut () {
      signOut(getAuth())
        .then(() => {
          console.log('success')
        }).catch((err) => {
          console.log(err)
        })
    }

    return {
      state,
      login,
      SignUp,
      googleLG,
      logOut
    }
  }
}
</script>

<style>

</style>
