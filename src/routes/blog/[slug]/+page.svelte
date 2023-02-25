<script lang="ts">
	import BlogTag from '$lib/components/BlogTag.svelte';
	import Section from '$lib/components/Section.svelte';

	export let data: any;
</script>

<!-- Blog Header -->
<Section
	wrapper={false}
	padding={false}
	class="hero relative h-[18rem] overflow-hidden bg-light-gray text-light"
>
	<!-- Image background -->
	<img
		src="/images/blogs/leverpostej/thumbnail.jpg"
		alt=""
		class="h-full w-full object-cover brightness-[0.3]"
	/>

	<!-- Content -->
	<div class="absolute top-0 left-0 flex h-full w-full flex-col items-center justify-center">
		<h1 class="mb-5 text-6xl font-semibold uppercase">{data.title}</h1>
		<hr class="mb-6 h-[0.2rem] w-[8rem] rounded-full bg-light" />
		<ul class="flex max-w-[25rem] flex-wrap items-center justify-center gap-2 text-xs">
			{#each data.meta.tags as tag}
				<BlogTag title={tag} />
			{/each}
		</ul>
	</div>
</Section>

<Section>
	<svelte:component this={data.content} />
</Section>

<style>
</style>
