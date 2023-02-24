<script lang="ts">
	import Logo from './Logo.svelte';
	import NavLink from './NavLink.svelte';
	const navLinks = [
		{ title: 'Min blog', path: '/blogs' },
		{ title: 'Om mig', path: '/om' }
	];
</script>

<header class="flex bg-green-900 shadow-md text-white justify-between items-center p-3">
	<Logo />

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
			class="font-semibold hover:bg-white hover:text-green-900 transition-all bg-zinc-900 px-2 py-1 rounded-md"
		>
			Kontakt
		</a>
	</div>
</header>
