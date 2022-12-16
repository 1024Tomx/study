import VueRequest from "@/service/request/index"

export function getDetailIfos(houseId){
  return VueRequest.get({url:"/detail/infos",params:{
    houseId
  }})
}