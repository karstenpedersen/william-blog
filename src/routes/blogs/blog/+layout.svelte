<script>
	import BlogTag from '$lib/components/BlogTag.svelte';
	import Section from '$lib/components/Section.svelte';
</script>

<!-- Blog Header -->
<Section padding={false} class="hero relative bg-light-gray text-light h-[18rem] overflow-hidden">
	<!-- Image background -->
	<img
		src="/images/blogs/leverpostej/thumbnail.jpg"
		alt=""
		class="w-full h-full brightness-[0.3] object-cover"
	/>

	<!-- Content -->
	<div class="absolute top-0 left-0 w-full h-full flex items-center justify-center flex-col">
		<h1 class="text-6xl font-semibold mb-5 uppercase">Leverpostej Rating</h1>
		<hr class="bg-light w-[8rem] h-[0.2rem] rounded-full mb-6" />
		<ul class="text-xs flex flex-wrap max-w-[25rem] items-center gap-2 justify-center">
			<BlogTag title="mad" />
			<BlogTag title="mad" />
			<BlogTag title="mad" />
			<BlogTag title="mad" />
			<BlogTag title="mad" />
			<BlogTag title="mad" />
			<BlogTag title="mad" />
			<BlogTag title="mad" />
			<BlogTag title="mad" />
			<BlogTag title="mad" />
			<BlogTag title="mad" />
			<BlogTag title="mad" />
			<BlogTag title="mad" />
		</ul>
	</div>
</Section>

<!-- Blog Content -->
<Section class="wrapper">
	<slot />
</Section>
