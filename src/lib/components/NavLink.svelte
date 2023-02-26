<script lang="ts">
	import { page } from '$app/stores';

	export let item: { title: string; path: string };
</script>

<a
	href={item.path}
	class="relative text-lg font-semibold transition-all hover:text-secondary"
	class:current={$page.url.pathname == item.path}>{item.title}</a
>

<style lang="postcss">
	.current {
		@apply !text-primary-fg-variant;
	}
</style>
