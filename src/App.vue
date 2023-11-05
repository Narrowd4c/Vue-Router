<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HeadComp from './components/HeaderComp.vue'
import LoadingComp from './components/LoadingComp.vue'
import { ref } from 'vue';
import { provide } from 'vue'
const count = ref(0)
function increment() { 
    count.value++
}
provide('count', { count, increment })

</script>

<template>
  <HeadComp></HeadComp>
  <LoadingComp></LoadingComp>
  <RouterView></RouterView>
</template>

