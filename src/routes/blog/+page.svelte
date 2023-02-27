<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import BlogCard from '$lib/components/BlogCard.svelte';
	import SearchBar from '$lib/components/SearchBar.svelte';
	import Section from '$lib/components/Section.svelte';
	import type { Blog } from '$lib/utils';
	import FaList from 'svelte-icons/fa/FaList.svelte';
	import FaThLarge from 'svelte-icons/fa/FaThLarge.svelte';
	import { slide } from 'svelte/transition';

	export let data: { posts: Blog[] };
	export let { posts } = data;

	let searchInput = $page.url.searchParams.get('search') ?? '';

	$: visiblePosts = posts;

	let display: 'grid' | 'list' = 'grid';

	const handleSubmit = async () => {
		let query = searchInput.trim();

		$page.url.searchParams.set('search', query);
		goto(`/blog/?${$page.url.searchParams.toString()}`, { keepFocus: true });
	};

	const handleDisplayMode = () => {
		display = display === 'grid' ? 'list' : 'grid';
	};
</script>

<Section padding={false} class="bg-primary-variant py-3 shadow-md">
	<SearchBar expand /></Section
>

<Section class="wrapper">
	{#if posts.length > 0}
		<!-- Display options -->
		<div class="mb-8 flex items-center justify-between">
			<p>
				Fandt {posts.length}
				{#if posts.length !== 1}
					resultater
				{:else}
					resultat
				{/if}
			</p>
			<button
				on:click={handleDisplayMode}
				class="rounded-md p-2 transition-colors hover:bg-secondary hover:text-secondary-fg"
			>
				<div class="icon">
					{#if display === 'grid'}
						<FaList />
					{:else}
						<FaThLarge />
					{/if}
				</div>
			</button>
		</div>

		{#key display}
			<!-- Blogs -->
			<div class="grid {display === 'grid' && 'sm:grid-cols-2 md:grid-cols-3'} gap-4">
				{#each visiblePosts as blog, i (blog.path)}
					<div in:slide={{ duration: 100, delay: i * 100 }}>
						<BlogCard {blog} {display} />
					</div>
				{/each}
			</div>
		{/key}
	{:else}
		<h1>Ingen opslag blev fundet</h1>
		<p>Prøv at søge efter noget andet</p>
	{/if}
</Section>
