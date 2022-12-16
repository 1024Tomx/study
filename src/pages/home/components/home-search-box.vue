<template>
  <div class="search-box">
    <!-- 位置 -->
    <div class="location bottom-gray-line">
      <div @click="cityClick" class="city">{{currentCity.cityName}}</div>
      <div @click="positionClick" class="position">
        <span class="text">我的位置</span>
        <img src="@/assets/img/home/icon_location.png" />
      </div>
    </div>
    <!-- 日期范围 -->
    <div @click="(showCalendar = true)" class="section bottom-gray-line">
      <div class="start">
        <div class="date">
          <span class="tip">入住</span>
          <span class="time">{{startDate}}</span>
        </div>
        <div class="stay">共{{stayCount}}晚</div>
      </div>
      <div class="end">
        <div class="date">
          <span class="tip">离店</span>
          <span class="time">{{endDate}}</span>
        </div>
      </div>
    </div>
    <van-calendar 
      v-model:show="showCalendar" 
      type="range"
      color="#ff9954"
      :round="false"
      :show-confirm="false"
      @confirm="onConfirm" />
    <!-- 关键字 -->
    <div class="section price-counter bottom-gray-line">
      <div class="start">价格不限</div>
      <div class="end">人数不限</div>
    </div>
    <div class="section keyword bottom-gray-line">关键字/位置/民宿名</div>
    <!-- 热门建议 -->
    <div class="section hot-suggest">
      <template v-for="(item, index) in hotSuggest" :key="index">
        <span
          :style="{color:item.tagText.color,
            backgroundColor:item.tagText.background.color }"
          class="tag">{{ item.tagText.text }}</span>
      </template>
    </div>
    <div class="section search-btn">
      <div class="btn" @click="startSearch">开始搜索</div>
    </div>
  </div>
</template>

<script setup>
  import useCity from '@/stores/module/city';
  import useHome from '@/stores/module/home';
  import useMain from '@/stores/module/main';
  import { storeToRefs } from 'pinia';
  import { computed, ref } from 'vue';
  import { useRouter } from 'vue-router';
  import {formatMonthDay,getDiffDays} from "@/utils/format_dayjs"

  // 获取状态管理
  const useCityStore = useCity()
  const useHomeStore = useHome()
  const useMainStore = useMain()
  // 获取路由
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
  // 获取选择的城市
  const {currentCity}=storeToRefs(useCityStore)

  // 日期范围处理
  // home中需要使用(子传父，store)
  const {nowDate,nextDate} = storeToRefs(useMainStore)
  const startDate = computed(()=>formatMonthDay(nowDate.value))
  const endDate = computed(()=>formatMonthDay(nextDate.value))
  // 总天数
  const stayCount = ref(getDiffDays(nowDate.value,nextDate.value))
  
  // 日期
  const showCalendar = ref(false)
  // 选择日期的监听
  const onConfirm=(value)=>{
    const selectStartDate = value[0]
    const selectEndDate = value[1]
    useMainStore.nowDate = selectStartDate
    useMainStore.nextDate = selectEndDate
    // 获取总天数
    stayCount.value = getDiffDays(selectStartDate,selectEndDate)
    // 隐藏日历组件
    showCalendar.value = false
  }

  // 获取热门区域建议
  const {Citysuggests:hotSuggest} = storeToRefs(useHomeStore)

  // 开始搜索(一般会携带参数)
  const startSearch=()=>{
    // console.log(currentCity.value);
    router.push({
      path:"/search",
      query:{
        startDate:startDate.value,
        endDate:endDate.value,
        currentCity:currentCity.value.cityName
      }
    })
  }
</script>

<style scoped>
.search-box{
  --van-calendar-popup-height:100%
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

/* section */
.section{
  display: flex;
  flex-wrap: wrap;
  height: 44px;
  align-items: center;
  padding: 0 20px;
  color: #999;
}
.start {
  flex: 1;
  display: flex;
  height: 44px;
  align-items: center;
}
.stay {
  flex: 1;
  text-align: center;
  font-size: 12px;
  color: #666;
}
.end {
  min-width: 30%;
  padding-left: 20px;
}

.date {
  display: flex;
  flex-direction: column;
}
.tip {
  font-size: 12px;
  color: #999;
}

.time {
  margin-top: 3px;
  color: #333;
  font-size: 15px;
  font-weight: 500;
}
/* 关键字 */
.start {
  border-right: 1px solid var(--line-color);
}
/* 热门推荐 */
.hot-suggest {
  margin: 10px 0;
  /* 自动计算高度 */
  height: auto;
}
.tag {
  font-size: 12px;
  padding: 4px 8px;
  margin: 3px;
  border-radius: 14px;
  color: #3f4954;
  background-color: #f1f3f5;
}
/* 搜索 */
.btn {
  width: 342px;
  height: 38px;
  max-height: 50px;
  font-weight: 500;
  font-size: 18px;
  line-height: 38px;
  text-align: center;
  border-radius: 20px;
  color: #fff;
  background-image: var(--theme-linear-gradient);
}
</style>