<template>
  <div class="city-group">
    <van-index-bar 
      :index-list="indexList" 
      :sticky="false">
      <!-- <van-index-anchor index="A" />
      <van-cell title="文本" />
      <van-cell title="文本" />
      <van-cell title="文本" /> -->
      <van-index-anchor index="热门" />
      <div class="hotCity">
        <template v-for="hotCity in groupData.hotCities">
          <div @click="cityClick(hotCity)" class="city">{{hotCity.cityName}}</div>
        </template>
      </div>
      <template
        v-for="(group,index) in groupData?.cities"
        :key="index+''">
        <van-index-anchor :index="group.group"></van-index-anchor>
        <template
          v-for="(city,index) in group.cities"
          :key="index+''">
          <van-cell @click="cityClick(city)" :title="city.cityName" />
        </template>
      </template>
    </van-index-bar>
  </div>
    <!-- <template 
      v-for="(item,index) in groupData?.cities"
      :key="index+''">
      <div class="group-item">
        <h2 class="title">标题:{{item.group}}</h2>
        <div class="list">
          <template 
            :key="indexC"
            v-for="(city,indexC) in item.cities">
            <div class="city">{{city.cityName}}</div>
          </template>
        </div>
      </div>
    </template> -->
</template>

<script setup>
  import { useRouter } from 'vue-router';
  import useCity from '@/stores/module/city';
  import { computed } from 'vue';
  const router = useRouter()
  const useCityStore = useCity() 
  const props = defineProps({
    groupData:{
      default:{}
    }
  })
  const indexList = computed(()=>{
    return ["#",...props.groupData.cities.map(n=>{
      return n.group
    })]
  })
  
  // 监听热门城市的返回
  const cityClick = (city)=>{
    // 选中当前城市并且返回
    useCityStore.currentCity = city
    // 返回上一级
    router.back()
  }
</script>

<style scoped>
:deep(.van-hairline--bottom){
  transform: translate3d(0,112px,0) !important;
}
.hotCity{
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 10px;
  padding-right: 25px;
}
.hotCity .city{
  width: 70px;
  height: 28px;
  border-radius: 14px;
  font-size: 12px;
  color: #000;
  text-align: center;
  line-height: 28px;
  background: #fff4ec;
  
  margin: 5px 0;
}
</style>