<script lang="ts">
	import ChevronCircleUp from 'svelte-icons/fa/FaArrowUp.svelte';
	import Logo from './Logo.svelte';
</script>

<footer class="wrapper bg-dark py-10 text-dark-fg">
	<!-- Logo and BackToTop -->
	<div class="flex items-center justify-between">
		<h2><Logo /></h2>
		<button
			class="aspect-square w-[2rem] rounded-md bg-light p-1 text-light-fg shadow-md transition-all hover:bg-secondary hover:text-secondary-fg"
		>
			<ChevronCircleUp />
		</button>
	</div>

	<!-- Content -->
	<div class="grid grid-cols-4 gap-4">
		<div>
			<p class="text-sm">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum, possimus. Cum dolores quas
				architecto ea quia fuga cupiditate soluta quam?
			</p>
		</div>
		<div>
			<h3>Links</h3>
			<ul>
				<li><a href="/blog" class="link">Min blog</a></li>
				<li><a href="/om" class="link">Om mig</a></li>
			</ul>
		</div>
		<div class="col-span-2">
			<h3>Blog Opslag</h3>
			<ul>
				<li><a href="/" class="link">Link</a></li>
			</ul>
		</div>
	</div>
</footer>

<style>
	h3 {
		@apply mb-2 text-dark-gray;
	}
</style>
