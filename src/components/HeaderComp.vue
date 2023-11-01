<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>
<template>
  <div class="border-bottom">
    <div class="d-flex align-items-center container py-4">
      <RouterLink to="/" class="fs-3">Router - Learn</RouterLink>
      <ul class="d-flex align-items-center ms-auto gap-4">
        <li><RouterLink to="/" class="px-3 py-2 text-danger d-block">Home</RouterLink></li>
        <li><RouterLink to="/about" class="px-3 py-2 text-danger d-block">About</RouterLink></li>
      </ul>
    </div>
  </div>
</template>
