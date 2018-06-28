<template>
  <v-layout>
    <v-flex xs4>
      <panel title="Song Metadata">
        <v-text-field
          id="title"
          required
          :rules="[required]"
          v-model="song.title"
          label="Title"
        ></v-text-field>
        <v-text-field
          id="artist"
          required
          :rules="[required]"
          v-model="song.artist"
          label="Artist"
        ></v-text-field>
        <v-text-field
          id="genre"
          required
          :rules="[required]"
          v-model="song.genre"
          label="Genre"
        ></v-text-field>
        <v-text-field
          id="album"
          required
          :rules="[required]"
          v-model="song.album"
          label="Album"
        ></v-text-field>
        <v-text-field
          id="albumImageUrl"
          required
          :rules="[required]"
          v-model="song.albumImageUrl"
          label="Album Image Url"
        ></v-text-field>
        <v-text-field
          id="youtubeId"
          required
          :rules="[required]"
          v-model="song.youtubeId"
          label="Youtube Id"
        ></v-text-field>

      </panel>
    </v-flex>

    <v-flex xs8>
      <panel title="Sonng Structure">
        <v-text-field
          id="tab"
          multi-line
          v-model="song.tab"
          label="Tab"
        ></v-text-field>

        <v-text-field
          id="lylics"
          multi-line
          v-model="song.lylics"
          label="Lyrics"
        ></v-text-field>

        <div class="danger-alert" v-if="error">{{error}}</div>
        <v-btn dark class="cyan"
               @click="create">
          Create Song
        </v-btn>
      </panel>
    </v-flex>
  </v-layout>
</template>

<script>
  import Panel from '@/components/Panel'
  import SongsService from "../services/SongsService";
  export default {
    data () {
      return {
        song : {
          title: null,
          artist: null,
          genre: null,
          album: null,
          albumImageUrl: null,
          youtubeId: null,
          lylics: null,
          tab: null
        },
        error: null,
        required : (value) => !!value || 'Required.'
      }
    },
    methods: {
     async create () {
       this.error = null
       const areAllFieldsFilledIn = Object
         .keys(this.song)
         .every(key => !!this.song[key])
       if (!areAllFieldsFilledIn) {
         this.error = 'Please fill in all the required fields'
         return
       }

        // call api
       try {
         await SongsService.post(this.song)
         this.$router.push({
           name : 'songs'
         })
       } catch (err) {
         console.log(err);
       }

      }
    },
    components : {
      Panel
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
