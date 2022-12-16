import { getCityAll } from "@/service";
import { defineStore } from "pinia";

const useCity = defineStore("city",{
  state:()=>({
    cityAll:{},
    currentCity:{
      cityName:'南昌'
    }
  }),
  actions:{
    async getCityAllActions(){
      const cityAll= await getCityAll()
      this.cityAll = cityAll.data
    }
  }
})

export default useCity