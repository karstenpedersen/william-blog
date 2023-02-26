<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import FaBars from 'svelte-icons/fa/FaBars.svelte';
	import FaFacebook from 'svelte-icons/fa/FaFacebook.svelte';
	import FaTimes from 'svelte-icons/fa/FaTimes.svelte';
	import { fly } from 'svelte/transition';
	import Backdrop from './Backdrop.svelte';
	import Logo from './Logo.svelte';
	import NavLink from './NavLink.svelte';
	import SearchBar from './SearchBar.svelte';

	let showMobileNav = false;
	let lastScrollY = 0;
	let scrollY = 0;
	$: hide = checkVisibility(scrollY);
	const checkVisibility = (newScrollY: number) => {
		let shouldHide = newScrollY > lastScrollY && newScrollY > 90;
		lastScrollY = newScrollY;
		return shouldHide;
	};

	const navLinks = [
		{ title: 'Min blog', path: '/blog' },
		{ title: 'Om mig', path: '/om' }
	];

	const toggleMobileNav = () => {
		showMobileNav = !showMobileNav;
	};
</script>

<!-- Bind scroll Y -->
<svelte:window bind:scrollY />

<!-- Desktop header -->
<header class="fixed top-0 left-0 right-0 z-[100] shadow-md transition-all" class:hide>
	<!-- Top -->
	<div class="wrapper-large z-50 bg-primary text-primary-fg">
		<div class="flex h-[4.5rem] items-center justify-between">
			<!-- Left Content-->
			<div class="flex items-center gap-6">
				<Logo />

				<div class="hidden w-[18rem] md:block">
					<SearchBar
						on:submit={() => {
							goto('/blog');
						}}
					/>
				</div>
			</div>

			<div class="flex items-center gap-4">
				<!-- Navigation -->
				<nav class="hidden md:block">
					<ul class="flex gap-4">
						{#each navLinks as item}
							<li>
								<NavLink {item} />
							</li>
						{/each}
					</ul>
				</nav>

				<!-- Divider -->
				<span class="aspect-square w-[0.4rem] rounded-full bg-primary-fg" />

				<!-- External Links -->
				<ul class="flex items-center gap-3">
					<li>
						<a href="/" class="block aspect-square w-[24px]">
							<FaFacebook />
						</a>
					</li>
				</ul>
			</div>

			<!-- Mobile Nav Button -->
			<button
				on:click={toggleMobileNav}
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
		class="wrapper-large absolute bottom-0 left-0 -z-10 h-[4rem] translate-y-[4rem] place-content-center bg-primary-variant text-primary-fg shadow-md transition-all duration-500 focus-within:!bg-opacity-100 md:-translate-y-[4rem]"
		class:hideOnBlog={$page.url.pathname === '/blog'}
		class:hideMobileSearch={hide}
	>
		<SearchBar expand={!hide} class="bg-primary" />
	</div>
</header>

<!-- Mobile Nav -->
{#if showMobileNav}
	<Backdrop on:click={toggleMobileNav}>
		<div
			transition:fly={{ x: 200 }}
			class="fixed right-0 top-0 bottom-0 z-10 w-full bg-primary text-primary-fg shadow-md sm:w-4/5 md:hidden"
		>
			<!-- Header -->
			<div class="flex h-[4.5rem] items-center justify-end px-[2.5vw]">
				<button
					on:click={toggleMobileNav}
					class=" rounded-md p-2 text-primary-fg transition-colors hover:bg-secondary hover:text-secondary-fg focus:bg-secondary focus:text-secondary-fg md:hidden"
				>
					<div class="aspect-square w-[32px]">
						<FaTimes />
					</div>
				</button>
			</div>

			<!-- Navigation -->
			<nav class="p-5">
				<ul class="grid justify-center gap-4 text-center">
					{#each navLinks as item}
						<li>
							<button on:click={toggleMobileNav}>
								<NavLink {item} />
							</button>
						</li>
					{/each}
				</ul>
			</nav>
		</div>
	</Backdrop>
{/if}

<style lang="postcss">
	.hide {
		@apply -translate-y-full;
	}

	.hideMobileSearch {
		@apply bg-opacity-0 shadow-none;
	}

	.hideOnBlog {
		@apply opacity-0;
	}
</style>
