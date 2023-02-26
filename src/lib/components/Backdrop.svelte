<script lang="ts">
	import { fade } from 'svelte/transition';
</script>

<div class="z-[9999]" transition:fade>
	<!-- Click outside -->
	<button on:click class="fixed inset-0 block w-full bg-dark bg-opacity-80" />

	<!-- Content -->
	<slot />
</div>
