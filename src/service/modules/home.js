import VueRequest from "@/service/request/index"

export function getCitySuggests(){
  return VueRequest.get({url:"/home/hotSuggests"})
}

export function getHomeCategories() {
  return VueRequest.get({
    url: "/home/categories",
  });
}

export function getHomeHouselist(page) {
  return VueRequest.get({
    url: "/home/houselist",
    params: {
      page,
    },
  });
}