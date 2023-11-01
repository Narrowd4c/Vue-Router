<script setup lang="ts">
defineProps({
    id:String
})
</script>

<template>
  <div>UserViewHome - {{ id }}</div>
  <RouterLink :to="{ name: 'user-info', params: { id: id } }">
        user-Info
   </RouterLink>
</template>
