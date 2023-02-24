<script lang="ts">
	import ChevronCircleUp from 'svelte-icons/fa/FaArrowUp.svelte';
	import Logo from './Logo.svelte';
</script>

<footer class="bg-dark text-light p-3">
	<div class="wrapper p-3">
		<div class="flex justify-between items-center">
			<h2><Logo /></h2>
			<button
				class="bg-light hover:bg-primary p-1 shadow-md hover:text-light transition-all aspect-square rounded-md w-[2rem] text-dark"
			>
				<ChevronCircleUp />
			</button>
		</div>
		<div class="grid grid-cols-4 gap-4">
			<div>
				<p class="text-sm">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum, possimus. Cum dolores
					quas architecto ea quia fuga cupiditate soluta quam?
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
	</div>
</footer>

<style>
	h3 {
		@apply text-dark-gray mb-2;
	}
</style>
