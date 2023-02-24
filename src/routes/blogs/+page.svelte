<script lang="ts">
	import BlogCard from '$lib/components/BlogCard.svelte';
	import Section from '$lib/components/Section.svelte';

	export let data;
	export let { posts, hello } = data;
</script>

<Section padding={false} class="bg-zinc-300 p-3">
	<form action="" class="wrapper flex gap-4 bg-white overflow-hidden pr-3 rounded-md">
		<input
			type="text"
			name=""
			id=""
			placeholder="Søg efter blogs"
			class="bg-transparent flex-1 p-1 px-3"
		/>
		<button>Søg</button>
	</form>
</Section>

<Section class="wrapper">
	<div class="grid grid-cols-3 gap-4">
		{#each posts as post}
			<BlogCard />
		{/each}
	</div>
</Section>
