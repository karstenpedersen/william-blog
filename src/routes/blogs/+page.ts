/** @type {import('./$types').PageLoad} */
export async function load() {
	const allPostFiles = await import.meta.glob('./blog/*/*.{svx,md}');
	console.log(allPostFiles);
	const allPosts = await Object.entries(allPostFiles).map(([path, post]) => {
		const postPath = path.slice(2, -9);

		return { title: postPath, path: postPath };
	});
	const posts = await allPosts;
	console.log(posts);
	return { posts, hello: 'Hello World' };
}
