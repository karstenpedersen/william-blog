export const fetchMarkdownPosts = async () => {
	const allPostFiles = import.meta.glob('/src/data/blogs/*.md');
	const iterablePostFiles = Object.entries(allPostFiles);

	const allPosts = await Promise.all(
		iterablePostFiles.map(async ([path, resolver]) => {
			const { metadata }: { metadata: BlogMeta } = await resolver();
			const postPath = 'blog/' + path.slice(16, -3);

			return {
				meta: metadata,
				path: postPath
			};
		})
	);

	return allPosts;
};

export type Blog = {
	meta: BlogMeta;
	path: string;
};

export type BlogMeta = {
	title: string;
	description: string;
	date: string;
	thumbnail: string;
	author: string;
	category: string;
	tags: string[];
};
