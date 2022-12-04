<template>
  <!-- <div class="tabbar"> -->
    <el-menu
    :default-active="currentIndex"
    active-text-color="#ff9854"
    router
    class="tabbar"
    @select="handleSelect"
  >
    <el-menu-item
      v-for="item,index in tabbarData"
      :key="index+''"
      :route="item.path"
      class="tabbar-item"
      :index="index+''">
      <template #title>
        <img v-if="(currentIndex!==index+'')" class="img" :src="getAssetUrl(item.image)" alt="">
        <img v-else class="img" :src="getAssetUrl(item.activeImage)" alt="">
        <span class="text">{{item.text}}</span>
      </template>
    </el-menu-item>
  </el-menu>
    <!-- <template v-for="(item, index) in tabbarData" :key="index+''">
      <div  
        @click="itemClick(index,item.path)"
        :class="{active:currentIndex===index}" 
        class="tabbar-item">
        <img v-if="(currentIndex!==index)" class="img" :src="getAssetUrl(item.image)" alt="">
        <img v-else class="img" :src="getAssetUrl(item.activeImage)" alt="">
        <span class="text">{{item.text}}</span>
      </div> 
    </template>-->
  <!-- </div> -->
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
  const currentIndex = ref("0")
  const itemClick = (index,item)=>{
    currentIndex.value = index
    router.push(item)
  }
  const handleSelect = (key, keyPath) => {
    console.log(key);
    currentIndex.value = key
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
  justify-content: center;
  border-top: 1px solid #f3f3f3;
}
.tabbar-item{
  flex: 1;
  line-height: 20px;
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

/* 修改样式的方法
   1.重写变量的值  强制生效 !important
    当前文件中的元素以及子元素生效
   2.找到类,对CSS属性进行重写(不能直接修改)
    scoped 只针对当前作用域，所以直接修改没有效果
    去掉scoped（但是会影响全局）
    :deep()穿透过去，找到这个子组件的样式
    >>>
    /deep/
*/

</style>