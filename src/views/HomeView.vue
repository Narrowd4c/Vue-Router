<script setup lang="ts">
import { RouterLink } from "vue-router";
import { ref } from 'vue';
import { useMouse } from '../composables/useMouse'
const userID = ref(1);
const { x, y} = useMouse()
</script>

<template>

  <div class="container">
  <div>pageX: {{ x }}</div>
  <div>pageY: {{ y }}</div>
    <p class="display-6 pt-4">Home Page</p>
     <div class="d-flex gap-3 my-4 align-items-center">
      <label for="userID">UserID</label>
      <input id="userID" type="number" max="6" v-model="userID" />
      <RouterLink :to="{ name: 'user-home', params: { id: userID } }"> Find </RouterLink>
    </div>
    <ul v-for="i in 6">
        <li class="mb-2"><RouterLink :to="{name:'user', params:{id:i}}">UserID - {{ i }}</RouterLink></li>
    </ul>
  </div>
</template>