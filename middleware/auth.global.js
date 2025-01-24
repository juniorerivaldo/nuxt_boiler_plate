export default defineNuxtRouteMiddleware((to, from) => {
	const isAuthenticated = function () {
	  return true
	}
	
	const publicRoutes = ['/login', '/register', '/forgot-password']; // Adicione outras rotas públicas aqui
	if (publicRoutes.includes(to.path)) {
		return;
	}

	// isAuthenticated() is an example method verifying if a user is authenticated
	if (isAuthenticated() === false) {
		return navigateTo('/login');
	}
});
