<template>
  <router-view />
  <!-- {{$route.fullPath}} -->
  <!-- v-if="$route.fullPath!='/city'" -->
  <!-- v-if="!route.meta.showTabbar" -->
  <tabbar />
  <loading />
</template>


<script setup>
  import loading from './components/loading/loading.vue';
  import tabbar from '@/components/tabbar/tabbar.vue';
  import { useRoute } from 'vue-router';
  
  const route = useRoute()


</script>



<style scoped>

</style>
