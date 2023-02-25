<script lang="ts">
	import BlogCard from '$lib/components/BlogCard.svelte';
	import Section from '$lib/components/Section.svelte';

	export let data;
	export let { posts } = data;
</script>

<Section padding={false} class="bg-light-gray p-3">
	<form action="" class="wrapper flex gap-4 overflow-hidden rounded-md bg-light pr-3">
		<input
			type="text"
			name=""
			id=""
			placeholder="Søg efter blogs"
			class="flex-1 bg-transparent p-1 px-3"
		/>
		<button>Søg</button>
	</form>
</Section>

<Section class="wrapper">
	<div class="grid grid-cols-3 gap-4">
		{#each posts as blog}
			<BlogCard {blog} />
		{/each}
	</div>
</Section>
