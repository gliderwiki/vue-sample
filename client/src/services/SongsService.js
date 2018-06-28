import Api from '@/services/Api'

export default {
  index () {
    return Api().get('songs')
  },
  post (song) {
    return Api().post('songs', song)
  }

}

// AuthenticationService.register({
//     email : 'test@test.com',
//     password : '1234'
// })
