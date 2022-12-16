<template>
  <div class="categories">
    <template 
      v-for="item,index in Categories"
      :key="item.id">
      <div class="item">
        <img :src="item.pictureUrl" alt="">
        <div class="text">{{item.title}}</div>
      </div>
    </template>
  </div>
</template>

<script setup>
import useHome from '@/stores/module/home';
import { storeToRefs } from 'pinia';

  const useHomeStore = useHome()
  const {Categories} = storeToRefs(useHomeStore)
</script>

<style scoped>
.categories{
  display: flex;
  overflow-x: auto;
  height: 80px;
  padding: 0 10px;
}
.categories::-webkit-scrollbar{
  display: none;
}
.item{
  flex-shrink: 0;
  width: 70px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.item img{
  width: 32px;
  height: 32px;
}
.item .text{
  font-size: 12px;
  margin-top: 8px;
}
</style>