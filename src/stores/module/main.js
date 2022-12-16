import { defineStore } from "pinia";

  const nowDate = new Date()
  const nextDate = new Date()
  nextDate.setDate(nowDate.getDate()+1)
  const useMain = defineStore("main",{
    state:()=>({
      token:'',
      // 控制是否显示加载
      isloading:false,
      // 共享的日期
      nowDate,
      nextDate
    })
  })

export default useMain