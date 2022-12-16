import { getCitySuggests,
         getHomeCategories,
         getHomeHouselist } from "@/service";
import { defineStore } from "pinia";

const useHome = defineStore("home",{
  state:()=>({
    Citysuggests:[],
    Categories:[],
    currentPage:1,
    houseList:[]
  }),
  actions:{
    async getCitySuggestsAction(){
      const res= await getCitySuggests()
      this.Citysuggests = res.data
    },
    async getHomeCategoriesAction(){
      const res = await getHomeCategories()
      this.Categories = res.data
    },
    async getHomeHouselistAction(){
      const res = await getHomeHouselist(this.currentPage)
      this.houseList.push(...res.data)
      this.currentPage++
      // this.houseList = res.data
    }
  }
})

export default useHome