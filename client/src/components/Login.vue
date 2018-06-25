<template>
  <v-container grid-list-xl text-xs-center>
    <v-layout row wrap>
      <v-flex xs10 offset-xs1>

        <div class="white elevation-2">
          <v-toolbar flat dense class="cyan" dark>
            <v-toolbar-title>Login</v-toolbar-title>
          </v-toolbar>
          <div class="pl-4 pr-4 pt-2 pb-2">
            <v-text-field
              id="email"
              v-model="email"
              label="email"
            ></v-text-field>

            <v-text-field
              id="password"
              type="password"
              v-model="password"
              label="password"
            ></v-text-field>

              <div class="err" v-html="error"></div><br>
              <v-btn class="cyan" @click="login">Login</v-btn>

          </div>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      email : '',
      password : '',
      error : null
    }
  },
  methods: {
    async login() {
      try {
        const response = await AuthenticationService.login({
          email :   this.email,
          password : this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
      } catch (error) {
        this.error = error.response.data.error
      }


    }
  }
  // mounted() {
  //   setTimeout(() => {
  //     this.email = 'hello world'
  //   }, 2000)
  // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.err {
  color  : red;
}
</style>
