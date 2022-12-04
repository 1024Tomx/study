<template>
  <div class="search-box">
    <div class="location">
      <div @click="cityClick" class="city">广州</div>
      <div @click="positionClick" class="position">
        <span class="text">我的位置</span>
        <img src="@/assets/img/home/icon_location.png" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';


  const router = useRouter()
  // 选择城市
  const cityClick= ()=>{
    router.push("./city")
  } 

  // 获取当前位置
  const positionClick = ()=>{
    navigator.geolocation.getCurrentPosition((res)=>{
      console.log("获取位置",res);
    },err=>{
      console.log(err,"获取失败");
    },{
      enableHighAccuracy:true,
      timeout:15000,
      maximumAge:0
    })
  }

</script>

<style scoped>
/* location */
.location{
  display: flex;
  align-items: center;
  height: 44px;
  padding: 0 20px;
}
.location .city{
  flex: 1;
  color:#333;
  font-size: 15px;
}
.location .position{
  width: 74px;
  display: flex;
  align-items: center;
}
.location .position .text{
  font-size: 12px;
  color: #666;
}
.location .position img{
  margin-left: 5px;
  width: 14px;
  height: 14px;
}
</style>