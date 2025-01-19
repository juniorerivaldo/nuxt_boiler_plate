<template>
  <div :class="['h-screen flex flex-col bg-gray-800  text-white transition-all', { 'w-64': isExpanded, 'w-16': !isExpanded }]">
    <button @click="toggleSidebar" :class="['p-2 focus:outline-none pr-8 pt-4 flex',{'justify-end': isExpanded}]">
      <span v-if="isExpanded"><CloseSidebarMenu/></span>
      <span v-else ><SidebarMenu/></span>
    </button>
    <ul class="flex-1">
      <li v-for="item in items.slice(0, -1)" :key="item.name" class="p-4 hover:bg-gray-700">
        <div v-if="isExpanded">{{ item.name }}</div>
        <div v-else class="pl-2">{{ item.icon }}</div>
      </li>
    </ul>
    <hr class="pb-2">
    <div class="p-2 pb-4 hover:bg-gray-700">
      <div v-if="isExpanded" class="flex gap-4 items-center"><ExitButton/>Sair</div>
        <div v-else><ExitButton/></div>
    </div>
  </div>
</template>

<script setup>

import { ref } from 'vue';
import CloseSidebarMenu from '~/components/closeSidebarMenu.vue';

const isExpanded = ref(true);
const items = ref([
  { name: 'Dashboard', icon: '📊' },
  { name: 'Profile', icon: '👤' },
  { name: 'Settings', icon: '⚙️' },
  { name: 'Logout', icon: '🚪' },
]);

const toggleSidebar = () => {
  isExpanded.value = !isExpanded.value;
};
const { data } = await useFetch('/api/teste')
console.log(data.value.message)
</script>

