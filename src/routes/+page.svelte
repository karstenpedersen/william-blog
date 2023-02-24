<script>
	import BlogCard from '$lib/components/BlogCard.svelte';
	import Section from '$lib/components/Section.svelte';

	export let data;
	export let { posts, hello } = data;
</script>

<Section padding={false} class="hero relative bg-zinc-300 text-white h-[18rem] overflow-hidden">
	<!-- Image background -->
	<img
		src="/images/blogs/leverpostej/thumbnail.jpg"
		alt=""
		class="w-full h-full brightness-[0.3] object-cover"
	/>

	<!-- Content -->
	<div class="absolute top-0 left-0 w-full h-full flex items-center justify-center flex-col">
		<h1 class="text-5xl">Min seje hjemmeside</h1>
	</div>
</Section>

<Section class="splitter">
	<img
		src="/images/blogs/leverpostej/thumbnail.jpg"
		alt=""
		class="w-full rounded-md h-full object-cover"
	/>

	<div>
		<h2>Hej og velkommen til min blog</h2>
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias modi a ad hic, numquam
			placeat nemo possimus aliquid earum molestiae.
		</p>
	</div>
</Section>

<Section class="wrapper">
	<h2>Nye opslag</h2>
	<p>
		Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias modi a ad hic, numquam
		placeat nemo possimus aliquid earum molestiae.
	</p>

	<div class="grid grid-cols-3 gap-4 mt-6">
		{#each posts as post}
			<BlogCard />
			<BlogCard />
			<BlogCard />
		{/each}
	</div>
</Section>

<Section class="splitter">
	<div>
		<h2>Om bloggen</h2>
		<p>Hey bloggen</p>
	</div>

	<img
		src="/images/blogs/leverpostej/thumbnail.jpg"
		alt=""
		class="w-full rounded-md h-full object-cover"
	/>
</Section>
