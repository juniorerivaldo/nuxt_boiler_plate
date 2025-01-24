<script setup>
	import { markRaw } from 'vue';
	import { useSidebarStore } from '~/stores/sidebar';
	import CloseSidebarMenu from '~/components/closeSidebarMenu.vue';
	import CustomerButton from '~/components/customerButton.vue';
	import ProductsButton from '~/components/productsButton.vue';
	import homeButton from './homeButton.vue';
import HomeButton from './homeButton.vue';

	// Use o store do Pinia
	const sidebarStore = useSidebarStore();

	const items = [
		{ name: 'Inicio', component: markRaw(HomeButton), link: '/' },
		{ name: 'Clientes', component: markRaw(CustomerButton), link: '/customers' },
		{ name: 'Produtos', component: markRaw(ProductsButton), link: '/products' },
	];
</script>

<template>
	<div class="h-screen fixed">
		<div :class="['h-screen flex flex-col bg-gray-800 text-white transition-all', { 'w-64': sidebarStore.isExpanded, 'w-16': !sidebarStore.isExpanded }]">
			<button @click="sidebarStore.toggleSidebar()" :class="['focus:outline-none p-4 pt-4 flex', { 'justify-end': sidebarStore.isExpanded }]">
				<span v-if="sidebarStore.isExpanded"><CloseSidebarMenu /></span>
				<span v-else><OpenSidebarMenu /></span>
			</button>
			<ul class="flex-1">
				<li v-for="item in items" :key="item.name" class="p-4 hover:bg-gray-700 flex items-center">
					<NuxtLink :to="item.link" class="w-full flex items-center">
						<div v-if="!sidebarStore.isExpanded" class="pr-2 flex justify-center items-center w-full">
							<component :is="item.component" class="text-3xl" />
						</div>
						<div v-if="sidebarStore.isExpanded" class="flex gap-4 items-center w-full">
							<component :is="item.component" class="text-xl" />
							{{ item.name }}
						</div>
					</NuxtLink>
				</li>
			</ul>
			<hr class="pb-2" />
			<div class="p-4 pb-4 hover:bg-gray-700">
				<div v-if="sidebarStore.isExpanded" class="flex gap-4 items-center"><ExitButton class="text-xl" />Sair</div>
				<div v-else class="flex justify-center"><ExitButton class="text-3xl" /></div>
			</div>
		</div>
	</div>
</template>
