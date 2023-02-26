import type { Load } from '@sveltejs/kit';

// src/routes/blog/[slug]/+page.js
export const load: Load = async ({ params }) => {
	// TODO - Change directory
	const post = await import(`../../../data/blogs/${params.slug}.md`);

	const { title, date } = post.metadata;
	const content = post.default;

	return {
		content,
		title,
		date,
		meta: post.metadata
	};
};
