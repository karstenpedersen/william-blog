<script>
	import FaSearch from 'svelte-icons/fa/FaSearch.svelte';
</script>

<form
	class="group relative flex h-[2.5rem] w-[2.5rem] overflow-hidden rounded-full bg-transparent transition-all duration-300 focus-within:w-full focus-within:bg-light focus-within:outline focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-secondary "
>
	<!-- Input -->
	<input
		type="text"
		placeholder="Søg"
		class="absolute h-full w-[2.5rem] cursor-pointer bg-transparent px-3 text-lg text-dark opacity-0 outline-none group-focus-within:w-[calc(100%-2.5rem)] group-focus-within:cursor-text group-focus-within:opacity-100"
		aria-label="search for blogs"
	/>

	<!-- Search Button -->
	<button
		class="ml-auto grid aspect-square h-full place-items-center outline-none transition-colors focus:bg-secondary focus:!text-secondary-fg group-focus-within:text-dark"
		aria-label="submit search"
	>
		<div class="w-[24px]">
			<FaSearch />
		</div>
	</button>
</form>
