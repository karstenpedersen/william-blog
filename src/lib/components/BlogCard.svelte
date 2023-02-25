<script lang="ts">
	import type { Blog } from '$lib/utils';

	export let blog: Blog;
</script>

<article class="min-h-[350px] overflow-hidden rounded-lg shadow-md">
	<a href={blog.path}>
		<img src={blog.meta.thumbnail} alt="" />
	</a>
	<div class="p-3">
		<h3><a href={blog.path}>{blog.meta.title}</a></h3>
		<p>{blog.meta.description}</p>
	</div>
</article>
