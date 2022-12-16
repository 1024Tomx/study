// 监听页面滚动到底部
// 问题
// 1.当我们离开页面上时，我们需要移除监听

import { onMounted, onUnmounted, reactive, ref } from "vue";
import { throttle } from "underscore"

// 2.如果别的页面也进行类似的监听，会编写重复的代码
// export default function useScroll(reachBottomCallback){
//   const scrollListenerHanler = ()=>{
//     // 窗口的高度
//     const clientHeight = document.documentElement.clientHeight
//     // 滚动条距离上方的高度
//     const scrollTop = document.documentElement.scrollTop
//     // 可滚动的高度
//     const scrollHeight = document.documentElement.scrollHeight
//     // 监听滚动条距离底部的位置
//     if((clientHeight+scrollTop+1) >=scrollHeight){
//       console.log("加载更多");
//       if(reachBottomCallback)reachBottomCallback()
//       // useHomeStore.getHomeHouselistAction()
//     }
//   }
//   // 做缓存keep-alive监听
//   onMounted(() => {
//     window.addEventListener("scroll",scrollListenerHanler)   
//   }),
//   // 解决问题1
//   onUnmounted(()=>{
//     window.removeEventListener("scroll",scrollListenerHanler)
//   })
// }

// 防抖：准备触发事件的时候有触发了事件，那么最开始触发的事件会被一直延后
// 节流：在单位事件可以触发很多次(频率很高)，那么我们可以设置一个事件间隔，
// 在这个间隔里面只会执行一次

//  underscore
export default function useScroll(reachBottomCallback){
  const scrollInfo = reactive({
    isReachBottom:false,
    clientHeight:0,
    scrollTop:0,
    scrollHeight:0,
  })
  // 执行频率太高，需要做一些节流防抖
  const scrollListenerHanler =throttle(()=>{
    // 窗口的高度
    scrollInfo.clientHeight = document.documentElement.clientHeight
    // 滚动条距离上方的高度
    scrollInfo.scrollTop = document.documentElement.scrollTop
    // 可滚动的高度
    scrollInfo.scrollHeight = document.documentElement.scrollHeight
    // 监听滚动条距离底部的位置
    if((scrollInfo.clientHeight+scrollInfo.scrollTop+1) >=scrollInfo.scrollHeight){
      console.log("加载更多");
      scrollInfo.isReachBottom = true
      // useHomeStore.getHomeHouselistAction()
    }
  },100)
  // 做缓存keep-alive监听
  onMounted(() => {
    window.addEventListener("scroll",scrollListenerHanler)   
  }),
  // 解决问题1
  onUnmounted(()=>{
    window.removeEventListener("scroll",scrollListenerHanler)
  })
  return scrollInfo
}