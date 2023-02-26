import type { Blog } from '$lib/utils';
import type { Load } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export const load: Load = async ({ fetch, url }) => {
	const response = await fetch(`/api/blogs`);
	const posts: Blog[] = await response.json();

	const search = url.searchParams.get('search') || null;

	console.log('search: ', search);

	if (search) {
		const filteredPosts = posts.filter((blog) => {
			return blog.meta.title.includes(search);
		});

		console.log('Filtered: ', filteredPosts);

		return { posts: filteredPosts };
	}

	return {
		posts
	};
};
