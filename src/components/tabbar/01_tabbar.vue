<template>
  <div class="tabbar">
    <template v-for="(item, index) in tabbarData" :key="index+''">
      <div  
        @click="itemClick(index,item.path)"
        :class="{active:currentIndex===index}" 
        class="tabbar-item">
        <!-- require：webpack
             vite: URL
        -->
        <img v-if="(currentIndex!==index)" class="img" :src="getAssetUrl(item.image)" alt="">
        <img v-else class="img" :src="getAssetUrl(item.activeImage)" alt="">
        <span class="text">{{item.text}}</span>
      </div>
    </template>
  </div>
</template>

<script setup>
  import tabbarData from '@/assets/data/tabbar'
  import {getAssetUrl} from "@/utils/get_assets_img"
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  // const getAssetUrl=(image)=>{
  //   // 参数1 当前路径的url
  //   // 参数2 相对路径
  //   return new URL(`../../assets/img/${image}`,import.meta.url).href
  // }
  const router = useRouter()
  const currentIndex = ref(0)
  const itemClick = (index,item)=>{
    currentIndex.value = index
    router.push(item)
  }
</script>

<style scoped>
.tabbar{
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 50px;
  display: flex;

  border-top: 1px solid #f3f3f3;
}
.tabbar-item{
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.text{
  font-size: 12px;
}
.img{
  width: 32px;
}
.active{
  color: #ff9854;
}
</style>