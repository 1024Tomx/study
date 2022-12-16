<template>
  <div 
    @click="loadClick"
    v-if="useMainStore.isloading" 
    class="loading">
    <div class="bg">
      <img src="@/assets/img/home/full-screen-loading.gif" alt="">
    </div>
  </div>
</template>

<script setup>
  import useMain from '@/stores/module/main';
  const useMainStore = useMain() 

  const loadClick = ()=>{
    useMainStore.isloading = false
  }
</script>

<style scoped>
.loading{
  position: fixed;
  z-index: 999;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, .1);
}
.bg{
  display: flex;
  width: 104px;
  height: 104px;
  background: url("@/assets/img/home/loading-bg.png") 0 0 / 100% 100%;
  justify-content: center;
  align-items: center;
}
.bg img{
  width: 70px;
  height: 70px;
  margin-bottom: 10px;
}
</style>