import axios from "axios";
import {timeout,BASE_URL} from './config'
import useMain from "@/stores/module/main";

const useMainStore = useMain()

class VueRequest {

  constructor(baseURL,timeout=10000){
    this.instance = axios.create({
      baseURL,
      timeout
    })
    this.instance.interceptors.request.use((config)=>{
      useMainStore.isloading = true
      return config
    },(err)=>{
      // 都没有发送出去没有必要写
      return err
    })
    this.instance.interceptors.response.use((config)=>{
      useMainStore.isloading = false
      return config
    },(err)=>{
      useMainStore.isloading = false
      return err
    })
  }

  request(config){
    return new Promise((resolve,reject)=>{
      this.instance.request(config).then(res=>{
        resolve(res.data)
        // 一般写代码逻辑，这样写会导致内容比较混乱
        // useMainStore.isloading = false
      }).catch(err=>{
        reject(err)
        console.log("请求失败");
        // useMainStore.isloading = false
      })
    })
  }

  get(config){
    return this.request({...config,method:"get"})
  }

  post(config){
    return this.request({...config,method:"post"})
  }
}

const instance = new VueRequest(BASE_URL,timeout)
const instance1 = new VueRequest("http://123.207.32.32:9001")

export default instance