import VueRequest from "@/service/request/index"

export function getCityAll(){
  return VueRequest.get({url:"/city/all"})
}
