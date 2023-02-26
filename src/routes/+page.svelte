<script>
	import BlogCard from '$lib/components/BlogCard.svelte';
	import Section from '$lib/components/Section.svelte';

	export let data;
	export let { posts } = data;
</script>

<Section wrapper={false} padding={false} class="hero relative h-[18rem] overflow-hidden text-light">
	<!-- Image background -->
	<img
		src="/images/blogs/leverpostej/thumbnail.jpg"
		alt=""
		class="h-full w-full object-cover brightness-[0.3]"
	/>

	<!-- Content -->
	<div class="absolute top-0 left-0 flex h-full w-full flex-col items-center justify-center">
		<h1 class="text-5xl">Min seje hjemmeside</h1>
	</div>
</Section>

<Section>
	<div class="splitter">
		<img
			src="/images/blogs/leverpostej/thumbnail.jpg"
			alt=""
			class="h-full w-full rounded-md object-cover"
		/>

		<div>
			<h2>Hej og velkommen til min blog</h2>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias modi a ad hic, numquam
				placeat nemo possimus aliquid earum molestiae.
			</p>
		</div>
	</div>
</Section>

<Section>
	<h2>Nye opslag</h2>
	<p>
		Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias modi a ad hic, numquam
		placeat nemo possimus aliquid earum molestiae.
	</p>

	<div class="mt-6 grid gap-4 md:grid-cols-3">
		{#each posts as blog}
			<BlogCard {blog} />
		{/each}
	</div>
</Section>

<Section>
	<div class="splitter">
		<div>
			<h2>Om bloggen</h2>
			<p>Hey bloggen</p>
		</div>

		<img
			src="/images/blogs/leverpostej/thumbnail.jpg"
			alt=""
			class="h-full w-full rounded-md object-cover"
		/>
	</div>
</Section>
