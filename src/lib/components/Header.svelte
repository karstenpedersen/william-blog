<script lang="ts">
	import FaEnvelope from 'svelte-icons/fa/FaEnvelope.svelte';
	import Logo from './Logo.svelte';
	import NavLink from './NavLink.svelte';
	import SearchBar from './SearchBar.svelte';
	const navLinks = [
		{ title: 'Min blog', path: '/blogs' },
		{ title: 'Om mig', path: '/om' }
	];
</script>

<header class="flex bg-primary shadow-md text-light justify-between items-center p-3">
	<div class="flex gap-6 items-center">
		<Logo />

		<SearchBar />
	</div>

	<div class="flex gap-5 items-center">
		<nav>
			<ul class="flex gap-4">
				{#each navLinks as item}
					<li>
						<NavLink {item} />
					</li>
				{/each}
			</ul>
		</nav>
		<a
			href="mailto:karstenfp.all@gmail.com"
			class="font-semibold transition-colors py-1 rounded-full w-[24px] hover:text-secondary"
		>
			<FaEnvelope />
		</a>
	</div>
</header>
