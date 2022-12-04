<template>
  <div class="home">
    <home-nav-bar />
    <!-- 主页图片 -->
    <div class="banner">
      <img src="@/assets/img/home/banner.webp" alt="">
    </div>

    <div class="location">
      <div class="city">广州</div>
      <div class="position">
        <span class="text">我的位置</span>
        <img src="@/assets/img/home/icon_location.png" />
      </div>
    </div>
  </div>
</template>

<script setup>
  import homeNavBar from './components/home-nav-bar.vue';
</script>

<style scoped>
.banner img{
  width: 100%;
}
/* location */
.location{
  display: flex;
  align-items: center;
  height: 44px;
  padding: 0 20px;
}
.location .city{
  flex: 1;
}
.location .position{
  width: 74px;
  display: flex;
  align-items: center;
}
.location .position .text{
  font-size: 12px;
}
.location .position img{
  margin-left: 5px;
  width: 18px;
  height: 18px;
}
</style>
