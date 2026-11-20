<script lang="ts">
	import { page } from '$app/state';
	import { deLocalizeHref, getLocale, localizeHref, locales, setLocale } from '../paraglide/runtime.js';

	const current = getLocale();
</script>

<div class="flex gap-3 font-mono text-xs font-semibold">
	{#each locales as locale}
		<a
			href={localizeHref(deLocalizeHref(page.url.pathname), { locale })}
			hreflang={locale}
			aria-current={locale === current ? 'true' : undefined}
			class="uppercase underline-offset-4 hover:underline {locale === current ? 'underline' : 'text-muted'}"
			onclick={(event) => {
				event.preventDefault();
				setLocale(locale);
			}}>{locale}</a
		>
	{/each}
</div>
