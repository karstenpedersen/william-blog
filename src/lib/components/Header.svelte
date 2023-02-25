<script lang="ts">
	import FaBars from 'svelte-icons/fa/FaBars.svelte';
	import Logo from './Logo.svelte';
	import NavLink from './NavLink.svelte';
	import SearchBar from './SearchBar.svelte';
	const navLinks = [
		{ title: 'Min blog', path: '/blog' },
		{ title: 'Om mig', path: '/om' }
	];
</script>

<header class="fixed top-0 left-0 right-0 z-[100] shadow-md">
	<div class="wrapper-large z-50 bg-primary text-primary-fg">
		<div class="flex h-[4.5rem] items-center justify-between">
			<!-- Left Content-->
			<div class="flex items-center gap-6">
				<Logo />

				<div class="hidden w-[18rem] md:block">
					<SearchBar />
				</div>
			</div>

			<!-- Navigation-->
			<nav class="hidden md:block">
				<ul class="flex gap-4">
					{#each navLinks as item}
						<li>
							<NavLink {item} />
						</li>
					{/each}
				</ul>
			</nav>

			<!-- Mobile Nav Button -->
			<button
				class="rounded-md p-2 text-primary-fg transition-colors hover:bg-secondary hover:text-secondary-fg focus:bg-secondary focus:text-secondary-fg md:hidden"
			>
				<div class="aspect-square w-[32px]">
					<FaBars />
				</div>
			</button>
		</div>
	</div>

	<!-- Mobile Search -->
	<div
		class="wrapper-large absolute bottom-0 left-0 -z-50 w-full translate-y-[3rem] bg-primary-variant shadow-md transition-all duration-500 md:-translate-y-[4.5rem]"
	>
		<div class="flex h-[3rem] items-center">
			<SearchBar />
		</div>
	</div>
</header>

<!-- Mobile Nav -->
<nav
	class="absolute right-0 top-0 bottom-0 z-[9999] w-4/5 translate-x-full bg-primary shadow-md transition-all"
>
	<ul><li><a href="/">Hello</a></li></ul>
</nav>
