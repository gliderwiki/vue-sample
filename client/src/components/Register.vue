<template>
  <v-layout row wrap>
    <v-flex xs6 offset-xs3>

      <panel title="Register">
        <form name="tab-tracker-form" autocomplete="off">
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
        </form>

        <br>
        <div class="err" v-html="error"></div>
        <br>
        <v-btn class="cyan" @click="register">Register</v-btn>
      </panel>
    </v-flex>
  </v-layout>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
import Panel from '@/components/Panel'
export default {
  data () {
    return {
      email : '',
      password : '',
      error : null
    }
  },
  methods: {
    async register() {
      try {
        const response = await AuthenticationService.register({
          email :   this.email,
          password : this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)

      } catch (error) {
        this.error = error.response.data.error
      }
    }
  },
  components : {
    Panel
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
