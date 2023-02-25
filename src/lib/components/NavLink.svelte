<script lang="ts">
	import { page } from '$app/stores';

	export let item: { title: string; path: string };
</script>

<a
	href={item.path}
	class="relative text-lg font-semibold transition-all"
	class:current={$page.url.pathname == item.path}>{item.title}</a
>

<style>
	a:after {
		--size: 0.2rem;
		--transition-speed: 150ms;
		--translate-y: 0.3rem;

		background-color: white;
		border-radius: 5px;
		content: '';
		bottom: 0;
		left: 50%;
		transform: translateX(-50%) translateY(0rem);
		position: absolute;
		width: var(--size);
		height: var(--size);
		aspect-ratio: 1;

		opacity: 0;
		transition: all var(--transition-speed) ease-in-out;
	}

	a.current:after {
		transform: translateX(-50%) translateY(var(--translate-y));
		width: 40%;
		height: var(--size);
		opacity: 1;
		transition: all var(--transition-speed) ease-in-out;
	}

	a:not(.current):hover:after {
		transform: translateX(-50%) translateY(var(--translate-y));
		opacity: 1;
		transition: all var(--transition-speed) ease-in-out;
	}
</style>
