<template>
  <div>
    <h1>Register</h1>
    <input type="email" v-model="email" name="email" placeholder="email" />
    <input type="password" v-model="password" name="password" placeholder="password" />
    <br>
    <button @click="register">Register</button>
  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      email : '',
      password : ''
    }
  }, 
  watch: {
    email(value) {
      // watch the change model value  
    }
  }, 
  methods: {
    async register() {
      const response = await AuthenticationService.register({
        email :   this.email, 
        password : this.password
      })
      console.log(response.data)
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

</style>
