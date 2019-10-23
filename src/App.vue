<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>proyectmusic</h1>
    <select v-model="slctCountry">
      <option v-for="country in countries" v-bind:value="country.value">{{country.name}}</option>
    </select>
    <spinner v-show="loading"></spinner>
    <ul>
      <artist v-for="artist in artists" v-bind:artist="artist" v-bind:key="artist.mbid"></artist>
    </ul>
  </div>
</template>

<script>
const api = require('./api');
import Artist from './components/Artist.vue';
import Spinner from './components/spinner.vue';

export default {
  name: 'app',
  data () {
    return {
      artists: [],
      countries: [
        {name:'Chile',    value:'chile'},
        {name:'Colombia', value:'colombia'},
        {name:'España',   value:'spain'}
      ],
      slctCountry: 'chile',
      loading: true,
    }
  },
  components:{
    Artist,
    Spinner,
  },
  methods:{
    refreshArtists(){
      const seft = this;
      seft.artists = [];
      this.loading = true;
      api.getArtist(this.slctCountry)
      .then( function (artists) {
        seft.loading = false;
        seft.artists = artists;
      });
    },
  },
  mounted() {
    this.refreshArtists();
  },
  watch:{
    slctCountry(){
      this.refreshArtists();
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>