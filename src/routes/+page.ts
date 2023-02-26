import type { Load } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export const load: Load = async ({ fetch }) => {
	const response = await fetch(`/api/blogs`);
	const posts = await response.json();

	return {
		posts
	};
};
