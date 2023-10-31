<script setup>
import { RouterLink } from "vue-router";
</script>
<template>
  <div class="container d-flex">
    <RouterLink to="/">Home</RouterLink>
    <ul class="ms-auto d-flex list-none">
      <li><RouterLink to="/" class="text-danger">Home</RouterLink></li>
      <li><RouterLink to="/about">About</RouterLink></li>
    </ul>
  </div>
</template>
