<script lang="ts">
	import { m } from '../paraglide/messages.js';
	import { localizeHref } from '../paraglide/runtime.js';
	import LangSwitch from './LangSwitch.svelte';
	import Logo from './Logo.svelte';

	const links = [
		{ label: m['nav.features'], href: localizeHref('/#features') },
		{ label: m['nav.pricing'], href: localizeHref('/#pricing') },
		// { label: m['nav.docs'], href: 'https://docs.kanlo.de', external: true },
		// { label: m['nav.marketplace'], href: 'https://market.kanlo.de', external: true },
		// { label: m['nav.blog'], href: localizeHref('/blog') }
	];
</script>

<header class="mx-auto flex max-w-7xl flex-wrap items-center gap-x-8 gap-y-3.5 px-8 py-6 text-[15px] font-medium">
	<a href={localizeHref('/')} class="display mr-auto flex items-center gap-2.5 text-[26px]">
		<Logo class="h-8.5 w-8" />
		Kanlo
	</a>
	{#each links as link}
		<!-- {#if link.external} -->
			<!-- <a href={link.href} class="underline-offset-4 hover:underline" target="_blank" rel="noopener noreferrer">{link.label()}</a> -->
		<!-- {:else} -->
			<a href={link.href} class="underline-offset-4 hover:underline">{link.label()}</a>
		<!-- {/if} -->
	{/each}
	<LangSwitch />
</header>
