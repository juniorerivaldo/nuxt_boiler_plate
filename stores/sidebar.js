// stores/sidebar.js
import { defineStore } from 'pinia';

export const useSidebarStore = defineStore('sidebar', {
	state: () => ({
		isExpanded: true, // Estado inicial do menu
	}),
	actions: {
		toggleSidebar() {
			this.isExpanded = !this.isExpanded;
		},
	},
});
