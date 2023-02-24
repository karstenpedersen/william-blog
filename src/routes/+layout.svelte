<script>
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';
	import '../app.css';
</script>

<div>
	<Header />
	<main><slot /></main>
	<Footer />
</div>

<style>
	div {
		height: 100dvh;
		display: grid;
		grid-template-rows: auto 1fr auto;
	}
</style>
