<script lang="ts">
	import { m } from '../paraglide/messages.js';
	import { localizeHref } from '../paraglide/runtime.js';
</script>

<footer class="overflow-hidden bg-amber">
	<div class="mx-auto max-w-7xl px-8 pt-18">
		<div class="flex flex-wrap justify-between gap-x-8 gap-y-3 text-sm">
			<span>{m['footer.copyright']({ year: new Date().getFullYear() })}</span>
			<nav class="flex gap-6">
				<a href="https://docs.kanlo.cc" class="underline-offset-4 hover:underline">{m['nav.docs']()}</a>
				<a href="https://swingalytica.com/blog?topic=kanlo" class="underline-offset-4 hover:underline">{m['nav.blog']()}</a>
				<a href={localizeHref('/impressum')} class="underline-offset-4 hover:underline">{m['footer.imprint']()}</a>
			</nav>
		</div>
		<div
			aria-hidden="true"
			class="display mt-10 -mb-[0.06em] -ml-[0.04em] text-[clamp(120px,30vw,440px)] leading-[0.78] text-navy"
		>
			Kanlo
		</div>
	</div>
</footer>
