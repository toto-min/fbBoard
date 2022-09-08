<template>
  <v-card
    class="mx-auto"
    width="400"
    variant="outline"
    title="Login"
  >
    <v-card-item>
      <v-text-field v-model="state.email" :rules="state.emailRules" label="E-mail" required></v-text-field>
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

    <v-card-actions>
        <v-btn block dark @click="login">
            LOGIN
        </v-btn>
    </v-card-actions>
    <v-card-actions>
        <v-btn @click="googleLG">
            GoogleLogin
        </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { reactive } from 'vue'
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
// import { auth } from '@/plugins/firebase'

export default {
  name: 'fbLogin',

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
      createUserWithEmailAndPassword(getAuth(), state.email, state.password)
        .then((credential) => {
          console.log(credential.user)
        }).catch((err) => {
          console.log(err)
        })
    }

    function googleLG () {
      const provider = new GoogleAuthProvider()
      signInWithPopup(getAuth(), provider)
        .then((result) => {
          console.log(result.user)
        }).catch((err) => {
          console.log(err)
        })
    }

    return {
      state,
      login,
      googleLG
    }
  }
}
</script>

<style>

</style>
