<script>
	import FaSearch from 'svelte-icons/fa/FaSearch.svelte';
</script>

<form
	action=""
	class="bg-light group bg-opacity-0 text-light focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline focus-within:outline-secondary focus-within:text-dark focus-within:bg-opacity-100 transition-all p-2 flex items-center rounded-full"
>
	<input
		type="text"
		placeholder="Søg"
		class="w-0 group-focus-within:w-full duration-300 transition-all active:w-full group-focus:w-full outline-none bg-transparent"
	/>

	<button class="outline-none w-[22px]">
		<FaSearch />
	</button>
</form>
