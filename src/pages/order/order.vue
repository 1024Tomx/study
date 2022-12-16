<template>
  <div class="order">
    <h2>order</h2>
    <template v-for="item in 100">
      <div>
        {{item}}
      </div>
    </template>
  </div>
</template>

<script setup>

</script>

<style scoped>
.order{
  height: 300px;
  background-color: orange;
  overflow-y: auto;
}
</style>