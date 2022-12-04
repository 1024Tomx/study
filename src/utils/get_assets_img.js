export const getAssetUrl=(image)=>{
    // 参数1 当前路径的url
    // 参数2 相对路径
    return new URL(`../assets/img/${image}`,import.meta.url).href
}