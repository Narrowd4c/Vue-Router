<script setup lang="ts">
import { ref, computed } from "vue";
import { useRoute, onBeforeRouteUpdate, RouterLink } from "vue-router";

const route = useRoute();
const userList = ref([
  { name: "John", id: "1" },
  { name: "Jane", id: "2" },
  { name: "Joe", id: "3" },
  { name: "Jim", id: "4" },
  { name: "Jill", id: "5" },
  { name: "Jenny", id: "6" },
]);
const routeUpdateToggle = ref(false);
onBeforeRouteUpdate((to, from) => {
  if (routeUpdateToggle.value) {
    if (userList.value.find((user) => user.id === to.params.id)) {
      return true;
    }
    alert("user not find");
    return false;
  }
});
const userID = ref(1);
const user = computed(() => {
  return userList.value.find((user) => user.id === route.params.id);
});

</script>

<template>
  <div class="container my-4">
    <div>
      <input id="checkUserID" type="checkbox" v-model="routeUpdateToggle" />
      <label for="checkUserID" class="ms-2"> checkUserID </label>
    </div>
    <div class="d-flex align-items-center my-4 gap-3">
      <label for="userID">userID</label>
      <input id="userID" type="number" v-model="userID" />
      <RouterLink :to="{ name: 'user-home', params: { id: userID } }">
        Find
      </RouterLink>
    </div>
    <div v-if="user">
      <p>Name: {{ user.name }}, ID: {{ user.id }}</p>
      <RouterView></RouterView>
    </div>
    <p v-else>User Not Found</p>
  </div>
</template>
