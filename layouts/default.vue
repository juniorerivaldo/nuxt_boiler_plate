<template>
	<sidebarMenu />
	<div :class="{ 'ml-64': sidebarStore.isExpanded }" class="ml-10 transition-all duration-300">
		<slot />
	</div>
</template>

<script setup>
	import { useSidebarStore } from '~/stores/sidebar';
	const sidebarStore = useSidebarStore();
</script>
