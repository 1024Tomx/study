<template>
  <!-- {{$route.fullPath}} -->
  <!-- v-if="$route.fullPath!='/city'" -->
  <!-- v-if="!route.meta.showTabbar" -->
  <tabbar ></tabbar>
  <router-view></router-view>
</template>


<script setup>
  import tabbar from '@/components/tabbar/tabbar.vue';
  import { useRoute } from 'vue-router';
  
  const route = useRoute()


</script>



<style scoped>
</style>
