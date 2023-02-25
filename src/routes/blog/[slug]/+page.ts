// src/routes/blog/[slug]/+page.js
export async function load({ params }: { params: { slug: string } }) {
	// TODO - Change directory
	const post = await import(`/src/data/blogs/${params.slug}.md`);

	const { title, date } = post.metadata;
	const content = post.default;

	return {
		content,
		title,
		date,
		meta: post.metadata
	};
}
