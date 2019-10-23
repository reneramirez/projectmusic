<template>
  <li class="artist"> 
    <h2>
      <a :href="artist.url" target="_blank">{{artist.name}}</a><br>
      <img :src="artist.image[2]['#text']">
    </h2>
  </li>
</template>

<script>
  export default {
    name: 'artist',
    props: ['artist']
  }
</script>

<style scoped>
  li.artist{
    display: inline-block;
    margin: 10px;
  }
</style>