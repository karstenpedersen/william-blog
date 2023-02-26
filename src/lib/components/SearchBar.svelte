<script lang="ts">
	import FaSearch from 'svelte-icons/fa/FaSearch.svelte';

	export let expand = false;

	let clazz = '';
	export { clazz as class };
</script>

<form
	on:submit|preventDefault
	class="focus-outline group relative flex h-[2.5rem] w-[2.5rem] overflow-hidden rounded-full transition-all duration-300 focus-within:w-full focus-within:bg-light {clazz}"
	class:expand
>
	<input
		type="text"
		placeholder="Søg"
		class="absolute h-full w-[2.5rem] cursor-pointer bg-transparent px-3 text-lg text-dark opacity-0 outline-none group-focus-within:w-[calc(100%-2.5rem)] group-focus-within:cursor-text group-focus-within:opacity-100"
		aria-label="search for blogs"
	/>

	<button
		class="ml-auto grid aspect-square h-full place-items-center outline-none transition-colors focus:bg-secondary focus:!text-secondary-fg group-focus-within:text-dark"
		aria-label="submit search"
	>
		<div class="w-[22px]">
			<FaSearch />
		</div>
	</button>
</form>

<style lang="postcss">
	.expand {
		@apply w-full bg-light;
	}

	.expand input {
		@apply w-[calc(100%-2.5rem)] cursor-text opacity-100;
	}

	.expand button {
		@apply text-dark;
	}
</style>
