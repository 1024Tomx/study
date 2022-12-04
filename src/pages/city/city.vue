<template>
  <div class="city top-page">
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
    <!-- 搜索框 -->
    
  </div>
</template>

<script setup>
  import { ref } from 'vue';
  import { Search } from '@element-plus/icons-vue'
  import { useRouter } from 'vue-router';
  const router = useRouter()
  const searchValue = ref("")
  const cancelClick = ()=>{
    router.back()
  }
</script>

<style scoped>
.city{
  /* position: relative;
  z-index: 9;
  height: 100vh;
  background-color: #fff;

  overflow-y:auto; */
}
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
</style>