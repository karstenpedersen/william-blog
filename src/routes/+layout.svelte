<script>
	import { page } from '$app/stores';
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';
	import '../app.css';
</script>

<Header />

<div>
	<div
		class="block max-h-[8.5rem] bg-primary transition-all duration-300 lg:max-h-[4.5rem]"
		class:blogPage={$page.url.pathname === '/blog'}
	/>
	<main><slot /></main>
	<Footer />
</div>

<style lang="postcss">
	div {
		height: 100dvh;
		display: grid;
		grid-template-rows: auto 1fr auto;
	}

	.blogPage {
		@apply !max-h-[4.5rem];
	}
</style>
