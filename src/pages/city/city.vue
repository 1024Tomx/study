<template>
  <div class="city top-page">
    <div class="top">
      <!-- 搜索框 -->
      <div class="search">
        <el-input
          v-model="searchValue"
          class="w-50 m-2 searchInp"
          size="small"
          placeholder="城市/区域/位置"
          >
          <template #prefix>
            <!-- style="color: #ff9854;" -->
            <el-icon class="el-icon--left inp-icon">
              <Search />
            </el-icon>
          </template>
        </el-input>
        <span @click="cancelClick" class="cancel">取消</span>
      </div>
      <!-- tab切换 -->
      <el-tabs 
        v-model="activeName" 
        class="demo-tabs" 
        stretch>
        <!-- <el-tab-pane :label="cityAll?.cityGroup?.title" name="first"></el-tab-pane>
        <el-tab-pane :label="cityAll?.cityGroupOverSea?.title" name="second"></el-tab-pane> -->
        <template
          v-for="(value,key,index) in cityAll"
          :key="key">
          <el-tab-pane
            :label="value.title"
            :name="key"
          ></el-tab-pane>
        </template>
      
      </el-tabs>
    </div>
    <div class="content">
      <!-- {{cityAll[activeName]?.cities}} -->
      <!-- <city-group :group-data="currentGroup" /> -->
      <template
        v-for="(value,key,index) in cityAll"
        :key="index+''">
        <city-group v-show="(activeName === key)" :group-data="value" />
      </template>
    </div>
  </div>
</template>
<!-- 123.207.32.32:1888/api/city/all -->
<script setup>
  import { ref } from 'vue';
  import { Search } from '@element-plus/icons-vue'
  import { useRouter } from 'vue-router';
  import useCity from '@/stores/module/city';
  import { storeToRefs } from 'pinia';
  import cityGroup from './components/city-group.vue';
  const router = useRouter()
  // 搜索框
  const searchValue = ref("")
  const cancelClick = ()=>{
    router.back()
  }

  // tab切换
  const activeName = ref("cityGroup")

  // 获取城市数据
  /**
   * 弊端：
   * 1.如果网络请求太多，那么页面组件中就包含大量的对于网络和数据的处理逻辑
   * 2.如果页面封装了很多的子组件，子组件需要这些数据，我们必须一步步将数据传递下去(props)
   * 
   * 可以抽取到pinia中去
   */
  // const cityAll = ref({})
  // getCityAll().then(res=>{
  //   console.log(res.data);
  //   cityAll.value = res.data
  // })
    const useCityStore = useCity()
    useCityStore.getCityAllActions()
    const { cityAll } =storeToRefs(useCityStore)

    // 获取选中标签后的数据
    // cityAll.value[activeName.value] 不是一个响应式数据
    // const currentGroup = computed(()=>cityAll.value[activeName.value])


</script>

<style scoped>
.city{
  /* position: relative;
  z-index: 9;
  height: 100vh;
  background-color: #fff;

  overflow-y:auto; */
}
.top{
  /* top位置固定
     有一部分内容看不见
     滚动条位置不对
  */
  /* position: fixed;
  top: 0;
  left: 0;
  right: 0; */
}
/* .content{
  margin-top: 113px;
} */
.content{
  height: calc(100vh - 113px);
  overflow-y: auto;
}
/* 搜索框 */
.search{
  display: flex;
  align-items: center;
  padding: 10px 0px 5px 5px;
}
.searchInp{
  --el-border-radius-base:15px;
  --el-fill-color-blank:#f9f9f9;
  border-radius: 50%;
  outline-color: #f9f9f9;
  /* background-color: #f8f8f8; */
}
.el-input{
  --el-input-focus-border-color:#ff9954;
} 
.cancel{
  width: 44px;
  margin-left: 5px;
}
/* tab切换 */
.demo-tabs{
  margin-top: 10px;
}
.demo-tabs > .el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}
/deep/ .el-tabs__active-bar{
  --el-color-primary:#ff9954;
  width: 50px !important;
  left:55px !important;
}
/deep/ .el-tabs__item:hover {
    color: black;
    cursor: pointer;
}
/deep/.el-tabs__item {
  --el-tabs-header-height: 50px;
  --el-color-primary:black;
}

/deep/ .el-tabs__nav-wrap::after{
  width: 0;
}
</style>