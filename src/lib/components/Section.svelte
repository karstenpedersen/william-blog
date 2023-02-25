<script>
	export let padding = true;
	export let wrapper = true;
	let clazz = '';
	export { clazz as class };
</script>

<section class={clazz} class:padding class:wrapper>
	<slot />
</section>

<style>
	.padding {
		@apply p-10;
	}
</style>
