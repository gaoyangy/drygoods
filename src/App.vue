<template>
   <div id="app">
     <Tops></Tops>     
     <router-view></router-view>
   </div>
 </template>
 <script>
 import Tops from './views/top/Top.vue'
 export default {
   name: 'app',
   components:{Tops}
 }
 </script>
 <style lang="sass">
@import ./sass/common.sass
 </style>