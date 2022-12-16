<template>
  <div class="content">
    <h2 class="title">热门精选</h2>
    <div class="list">
      <template 
        v-for="(item,index) in houseList"
        :key="item.data.houseId">
        <houseItemV9
          :itemData="item.data" 
          v-if="(item.discoveryContentType === 9)"
          @click="itemClick(item.data)"/>
        <houseItemV3
          :itemData="item.data" 
          v-else-if="(item.discoveryContentType === 3)"
          @click="itemClick(item.data)"/>
      </template>
    </div>
  </div>
</template>

<script setup>
  import houseItemV9 from "@/components/house-item-v9/house-item-v9.vue"
  import houseItemV3 from "@/components/house-item-v3/house-item-v3.vue"
  import useHome from '@/stores/module/home';
  import { useRouter } from "vue-router";

  const router = useRouter()

  const useHomeStore = useHome()
  const {houseList} = useHomeStore

  // 绑定在组件时会默认绑定到组件的根元素
  // 如果有多个的情况需要指定绑定，$attrs
  function itemClick(item){
    router.push(`/detail/${item.houseId}`)
  }
</script>

<style scoped>
.content{
  padding: 10px 8px;
  /* position: relative;
  z-index: -1; */
}
.content .title{
  font-size: 22px;
  padding: 0 10px;
}

.list{
  display: flex;
  flex-wrap: wrap;
}
</style>