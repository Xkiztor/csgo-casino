<script setup lang='ts'>
const route = useRoute()

console.log(route.params);
console.log(route.query);
</script>


<template>
  <div>
    <!-- {{ route.currentRoute.value.params.slug }} -->
  </div>
</template>


<style></style>