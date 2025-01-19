export default defineEventHandler(async (event) => {
	console.log('TESTE do lado do server');
	return {
		message: 'teste do lado do cliente',
		success: true,
	};
});
