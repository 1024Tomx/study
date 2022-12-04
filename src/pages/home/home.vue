<template>
  <div class="home">
    <home-nav-bar />
    <!-- 主页图片 -->
    <div class="banner">
      <img src="@/assets/img/home/banner.webp" alt="">
    </div>
    <homeSearchBox />
    
  </div>
</template>

<script setup>
  import homeNavBar from './components/home-nav-bar.vue';
  import homeSearchBox from './components/home-search-box.vue'
</script>

<style scoped>
.banner img{
  width: 100%;
}

</style>
