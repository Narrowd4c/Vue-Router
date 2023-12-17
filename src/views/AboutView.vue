<template>
    <div class="h-200">
        <div>{{ $route.meta.requiresAuth }}</div>
        <p>About: {{ $route.params.id }}</p>
        <RouterLink :to="{name:'Home', query: { redirect: $route.fullPath }}">Home</RouterLink>
        <RouterLink to="/about/13">13</RouterLink>
        <RouterView name="hello"></RouterView>
        <RouterView></RouterView>
    </div>
    <h1 id="main">{{ a }}</h1>
</template>

<script setup lang="ts">
import { useRoute, onBeforeRouteUpdate } from "vue-router"
import { watch, ref } from "vue"
defineProps({
    id:String,
})

const route = useRoute()
let a = route.params.id
onBeforeRouteUpdate((to, from) => { 
    console.log('to', to)
    console.log('from', from)
})
// watch(() => route.params, (newV, oldV) => { 
//     console.log('old', oldV.id)
//     console.log('new', newV.id)
// })
</script>

<style lang="scss" scoped>
.h-200{
    height: 200vh;
}
</style>