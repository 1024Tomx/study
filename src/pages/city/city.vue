<template>
  <div class="city top-page">
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
      stretch
      @tab-click="handleClick">
      <el-tab-pane label="国内 港澳台" name="first"></el-tab-pane>
      <el-tab-pane label="国外" name="second"></el-tab-pane>
    </el-tabs>
    
  </div>
</template>
<!-- 123.207.32.32:1888/api/city/all -->
<script setup>
  import { ref } from 'vue';
  import { Search } from '@element-plus/icons-vue'
  import { useRouter } from 'vue-router';
  import {getCityAll} from '@/service'
  const router = useRouter()
  // 搜索框
  const searchValue = ref("")
  const cancelClick = ()=>{
    router.back()
  }

  // tab切换
  const activeName = ref("first")
  const handleClick = (tab, event) => {
    console.log(tab, event)
  }

  // 获取城市数据
  getCityAll().then(res=>{
    console.log(res);
  })
</script>

<style scoped>
.city{
  /* position: relative;
  z-index: 9;
  height: 100vh;
  background-color: #fff;

  overflow-y:auto; */
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