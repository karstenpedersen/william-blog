<script>
	export let padding = true;
	let clazz = '';
	export { clazz as class };
</script>

<section class="custom-section {clazz}" class:padding>
	<slot />
</section>

<style>
	.padding {
		@apply p-3 pt-10;
	}

	.padding:last-of-type {
		@apply pb-10;
	}
</style>
