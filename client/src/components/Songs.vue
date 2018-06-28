<template>
  <v-layout row wrap>
    <v-flex xs6 offset-xs3>
      <panel title="Songs">
          <v-btn slot="action"
                 @click="navigateTo({name : 'songs-create'})"
                 absolute
                 light
                 right
                 middle
                 medium
                 fab
                 class="cyan accent-2">
            <v-icon>add</v-icon>
          </v-btn>


        <div class="song" v-for="song in songs"
        :key="song.id">

          <v-layout>
            <v-flex xs6>
              <div class="song-title">{{song.title}}</div>
              <div class="song-artist">{{song.artist}}</div>
              <div class="song-album">{{song.album}}</div>


              <v-btn
                dark
                class="cyan"
                @click="navigateTo({
                  name : 'song',
                  params : {
                    songId : song.id
                  }
                })">
                View
              </v-btn>
            </v-flex>


            <v-flex xs6>
              <img class="album-image" :src="song.albumImageUrl" />
            </v-flex>

          </v-layout>
        </div>
      </panel>
    </v-flex>
  </v-layout>
</template>

<script>
import Panel from '@/components/Panel.vue'
import SongsService from '@/services/SongsService'

export default {
  components : {
    Panel
  },
  data () {
    return {
      songs: null
    }
  },
  methods : {
    navigateTo (route) {
      this.$router.push(route)
    }
  },
  async mounted () {
    console.log('songs', this.songs);
    this.songs = (await SongsService.index()).data
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.song {
  font-size: 20px;
  height: 300px;
  overflow: hidden;
}


.song-title {
  font-size: 30px;
}

.song-artist {
  font-size: 24px
}

.song-album {
  font-size: 18px
}

.album-image {
  width: 70% ;
}
</style>
