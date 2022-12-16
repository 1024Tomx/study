<template>
  <div class="swiper">
    <van-swipe 
      class="swipe-list" 
      :autoplay="3000" 
      indicator-color="white">
      <template v-for="item,index in swipeData">
        <van-swipe-item class="item">
          <img :src="item.url" alt="">
        </van-swipe-item>
      </template>
      <template #indicator="{ active, total }">
        <!-- <div class="indicator">{{ active + 1 }}/{{ total }}</div> -->  
        <div class="indicator">
          <template v-for="value,key,index in swipeGroup" :key="key">
            <span 
              class="itemTitle" 
              :class="{actives: swipeData[active]?.enumPictureCategory == key}">
              <span class="text">{{getName(value[0].title)}}</span>
              <span v-if="swipeData[active]?.enumPictureCategory == key" class="count">
                {{getCategoryIndex(swipeData[active])}}/{{value.length}}
              </span>
            </span>
            <!-- <span class="itemTitle">{{}}</span> -->
          </template>
        </div>
      </template>
    </van-swipe>
  </div>
</template>

<script setup>

  const props = defineProps({
    swipeData:{
      default:[]
    }
  })
  // 1.转换数据
  const swipeGroup ={}
  props.swipeData.forEach((item)=>{
    // obj[item.enumPictureCategory] 取出key为enumPictureCategory的值
    let key = swipeGroup[item.enumPictureCategory]
    if(!key){
      key = []
      swipeGroup[item.enumPictureCategory] = key
    }
    // 因为值引用所以key添加了swipeGroup也加添加了
    key.push(item)
  })

    // 两次循环
    // props.swipeData.forEach((item)=>{
    //   swipeGroup[item.enumPictureCategory] = []
    // })
    // props.swipeData.forEach((item,index)=>{
    //   const valueArray = swipeGroup[item.enumPictureCategory]
    //   valueArray.push(item)
    //   console.log(valueArray);
    // })

  // 定义转换数据的方法
  const getName = (name) =>{
    // 惰性匹配获取中间的文字
    const nameReg = /【(.*?)】/i
    // return name.replace("：","").replace("【","").replace("】","")
    const result = nameReg.exec(name)
    return result[1]
  }
  // 获取类别当中的索引
  const getCategoryIndex = (item) =>{
    const valueArray = swipeGroup[item.enumPictureCategory]

    return valueArray.findIndex(data=>data ===item) + 1
  }
</script>

<style scoped>
.item img{
  width: 100%;
}
.indicator{
  position: absolute;
  right: 5px;
  bottom: 5px;
  display: flex;
  padding: 2px 5px;
  font-style: 13px;
  color: #fff;
  background: rgba(0, 0, 0, 0.8);
}
.itemTitle{
  margin: 0 3px;
}
.actives{
  padding: 0 3px;
  border-radius: 5px;
  background-color: #fff;
  color: #333;
}
</style>