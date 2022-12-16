<template>
  <div class="detail top-page">
    <van-nav-bar
      title="房屋详情"
      left-text="旅途"
      left-arrow
      @click-left="onClickLeft"
    />
    <div class="main" v-if="mainPart">
      <detailSwiper :swipeData="mainPart.topModule.housePicture.housePics" />
      <detailInfo :top-infos="mainPart.topModule" />
    </div>
  </div>
</template>

<script setup>
  import detailSwiper from "./components/detail-01-swiper.vue"
  import detailInfo from "./components/detail-02-infos.vue"
  import { useRoute, useRouter } from 'vue-router';
  import { getDetailIfos } from "@/service"
  import { computed, ref } from 'vue';
  const route = useRoute()
  const router = useRouter()
  const onClickLeft = ()=>{
    router.back()
  }
  // 请求数据
  const houseId = route.params.id
  const detailInfos = ref({})
  // 分解数据
  const mainPart = computed(()=>detailInfos.value.mainPart)
  // 页面上发送请求
  getDetailIfos(houseId).then(res=>{
    detailInfos.value = res.data
  })
  
</script>

<style scoped>

</style>