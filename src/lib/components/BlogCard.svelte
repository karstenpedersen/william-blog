<script lang="ts">
	let blog = {
		thumbnail: '/images/blogs/leverpostej/thumbnail.jpg',
		title: 'Leverpostej',
		description: 'Cool blog',
		path: '/blogs/blog/leverpostej'
	};
</script>

<article class="shadow-md rounded-lg overflow-hidden min-h-[350px]">
	<a href={blog.path}>
		<img src={blog.thumbnail} alt="" />
	</a>
	<div class="p-3">
		<h3><a href={blog.path}>{blog.title}</a></h3>
		<p>{blog.description}</p>
	</div>
</article>
