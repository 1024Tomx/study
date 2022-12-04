<template>
  <div class="home">
    <h2>home</h2>
    <el-switch v-model="value1" />
    <el-button type="primary" loading>Loading</el-button>
    <el-rate :colors="['aqua']" v-model="value" allow-half />
    <el-button type="success" @click="getRate">获取评分</el-button>
  </div>
</template>

<script setup>
  import { ref } from 'vue'

  const value1 = ref(true)
  const value = ref()
  function getRate(){
    console.log(value.value);
  }
</script>

<style scoped>
</style>
