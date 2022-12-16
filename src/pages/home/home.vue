<template>
  <div class="home">
    <home-nav-bar />
    <!-- 主页图片 -->
    <div class="banner">
      <img src="@/assets/img/home/banner.webp" alt="">
    </div>
    <homeSearchBox />
    <homeCategories />
    <div 
      class="searc-bar" 
      v-if="isShowSearch">
      <searchBar />
    </div>
    <homeContent />
  </div>
</template>

<script setup>
  import homeNavBar from './components/home-nav-bar.vue'
  import homeSearchBox from './components/home-search-box.vue'
  import homeCategories from "./components/home-categories.vue"
  import homeContent from './components/home-content.vue';
  import searchBar from '@/components/search-bar/search-bar.vue';
  import useHome from '@/stores/module/home';
  import useScroll from '@/hooks/useScroll';
  import { computed, ref, toRefs, watch } from 'vue';
  const useHomeStore = useHome()
  useHomeStore.getCitySuggestsAction()
  useHomeStore.getHomeCategoriesAction()
  // let currentPage = 1
  // useHomeStore.getHomeHouselistAction(currentPage)
  useHomeStore.getHomeHouselistAction()

  // 回调函数的写法
  // useScroll(()=>{
  //   useHomeStore.getHomeHouselistAction()
  // })
  // 监听滚动到底部
  const scrollInfo= useScroll()
  const {isReachBottom,scrollTop}=toRefs(scrollInfo)
  watch(isReachBottom,(n)=>{
    if(n){
      // 更加严谨的做法是数据请求成功后更改状态
      useHomeStore.getHomeHouselistAction().then(res=>{     
        isReachBottom.value = false
      })
    }
  })
  // 搜索框的显示
  // 方式1
  // const isShowSearch = ref(false)
  // watch(scrollTop,(n)=>{
  //   isShowSearch.value = (n >=100)
  // })
  // 计算属性也是响应的
  // 定义的可响应式数据，依赖另一个可响应式的数据，那么可以使用计算属性
  const isShowSearch = computed(()=>scrollTop.value >=350)
</script>

<style scoped>
.home{
  padding-bottom: 50px;
}
.banner img{
  width: 100%;
}
/* 搜索框 */
.searc-bar{
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 45px;
  padding: 6px 6px 10px;
  background-color: #fff;
}
</style>
