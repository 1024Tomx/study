<template>
  <!-- <div class="tabbar"> -->
    <el-menu
      :default-active="route.path"
      active-text-color="#ff9854"
      router
      class="tabbar"
    >
      <el-menu-item
        v-for="item,index in tabbarData"
        :key="index+''"
        class="tabbar-item"
        :index="item.path">
        <template #title>
          <img v-if="(currentIndex!==item.path)" class="img" :src="getAssetUrl(item.image)" alt="">
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
  import { getAssetUrl } from "@/utils/get_assets_img"
  import { ref, watch } from 'vue';
  import { useRoute } from 'vue-router';
  const route = useRoute()

  // 监听路由的变化，找到对应的索引，设置值
  const currentIndex = ref(route.path)
  watch(route,(n)=>{
    const index = tabbarData.findIndex(item=>item.path === n.path)
    if(index === -1)return
    currentIndex.value = n.path
  })
</script>

<style scoped>
.tabbar{
  position: fixed;
  bottom: -4px;
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
  padding-bottom: 4px;
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
   1.重写变量的值  强制生效 !important:提高权重
    当前文件中的元素以及子元素生效
   2.找到类,对CSS属性进行重写(不能直接修改)
    scoped 只针对当前作用域，所以直接修改没有效果
    去掉scoped（但是会影响全局）
    :deep()穿透过去，找到这个子组件的样式
    >>>
    /deep/
*/

</style>