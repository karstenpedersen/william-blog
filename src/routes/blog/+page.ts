/** @type {import('./$types').PageLoad} */
export const load = async ({ fetch }) => {
	const response = await fetch(`/api/blogs`);
	const posts = await response.json();

	return {
		posts
	};
};
