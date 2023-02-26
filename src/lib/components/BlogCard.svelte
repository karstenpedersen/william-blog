<script lang="ts">
	import type { Blog } from '$lib/utils';

	export let blog: Blog;
	export let display: 'grid' | 'list' = 'grid';
</script>

<article
	class="flex overflow-hidden rounded-md shadow-md"
	class:gridLayout={display === 'grid'}
	class:listLayout={display === 'list'}
>
	<a href={blog.path} class="grid flex-1 overflow-hidden bg-light-gray">
		<img src={blog.meta.thumbnail} alt="" class="h-full w-full object-cover" />
	</a>
	<div class="flex flex-1 flex-col p-3">
		<h3 class="mb-2 text-3xl"><a href={blog.path}>{blog.meta.title}</a></h3>
		<hr class="mb-4 h-[0.25rem] w-[3rem] rounded-full bg-primary" />
		<p>{blog.meta.description}</p>
		<a
			href={blog.path}
			class="mt-auto max-w-max rounded-md bg-primary px-3 py-1 font-semibold text-primary-fg transition-colors hover:bg-secondary hover:text-secondary-fg"
		>
			Læs mere
		</a>
	</div>
</article>

<style>
	.gridLayout {
		@apply min-h-[350px] flex-col;
	}

	.gridLayout h3 {
		@apply text-2xl;
	}

	.listLayout {
		@apply flex;
	}
</style>
