<script lang="ts">
	import Board from '../lib/components/Board.svelte';
	import Soon from '../lib/components/Soon.svelte';
	import { m } from '../lib/paraglide/messages.js';
	import { getLocale } from '../lib/paraglide/runtime.js';

	const features = [
		{ title: m['features.boards.title'], text: m['features.boards.text'] },
		{ title: m['features.permissions.title'], text: m['features.permissions.text'] },
		{ title: m['features.github.title'], text: m['features.github.text'], soon: true },
		{ title: m['features.plugins.title'], text: m['features.plugins.text'], soon: true },
		{ title: m['features.rust.title'], text: m['features.rust.text'] },
		{ title: m['features.calendar.title'], text: m['features.calendar.text'], soon: true }
	];

	const plans = [
		{ name: 'Team', price: 4.76, vat: m['pricing.inclVat'], includes: m['pricing.team.includes'] },
		{ name: 'Business', price: 10.71, vat: m['pricing.inclVat'], includes: m['pricing.business.includes'], highlight: true },
		{ name: 'Enterprise', price: 12, vat: m['pricing.exclVat'], includes: m['pricing.enterprise.includes'], soon: true }
	];

	const euro = new Intl.NumberFormat(getLocale(), {
		style: 'currency',
		currency: 'EUR',
		minimumFractionDigits: 0,
		maximumFractionDigits: 2
	});
</script>

<section class="mx-auto max-w-7xl px-8 pt-18 pb-14">
	<p class="enter label mb-7 text-muted">{m['hero.eyebrow']()}</p>
	<h1
		class="display enter max-w-[1100px] text-[clamp(52px,9.5vw,148px)] leading-[0.94] [animation-delay:120ms]"
	>
		{m['hero.title1']()} <span class="marker px-[0.1em]">{m['hero.title2']()}</span> {m['hero.title3']()}
	</h1>
	<div class="enter mt-12 flex flex-wrap items-center gap-x-8 gap-y-5 [animation-delay:500ms]">
		<a href="#" class="btn bg-amber text-navy">{m['hero.cta']()}</a>
		<a href="https://docs.kanlo.cc" class="font-semibold underline-offset-4 hover:underline">{m['hero.docs']()}</a>
		<p class="max-w-[420px] leading-relaxed text-muted">
			{m['hero.intro']()}
		</p>
	</div>
</section>

<section class="mx-auto max-w-7xl px-8 pb-24">
	<Board />
</section>

<section id="features" class="mx-auto max-w-7xl px-8 pt-10 pb-24">
	<h2 class="display mb-14 max-w-[800px] text-[clamp(36px,5vw,72px)] leading-none">
		{m['features.title']()}
	</h2>
	<ul class="border-b border-navy">
		{#each features as feature}
			<li
				class="reveal flex flex-wrap items-baseline gap-x-7 gap-y-3 border-t border-navy py-7.5 transition-transform hover:translate-x-3"
			>
				<div class="min-w-[min(320px,100%)] flex-1">
					<h3 class="display text-3xl">{feature.title()}</h3>
					<p class="mt-2.5 max-w-[560px] leading-relaxed text-muted">{feature.text()}</p>
				</div>
				{#if feature.soon}<Soon />{/if}
			</li>
		{/each}
	</ul>
</section>

<section class="grid grid-cols-[repeat(auto-fit,minmax(340px,1fr))]">
	<div class="bg-amber px-12 py-18">
		<p class="label mb-6">{m['deploy.cloudLabel']()}</p>
		<h3 class="display text-[clamp(36px,4.5vw,64px)] leading-none">{m['deploy.cloudTitle']()}</h3>
		<p class="mt-6 max-w-[420px] leading-relaxed">
			{m['deploy.cloudText']()}
		</p>
	</div>
	<div class="bg-navy px-12 py-18 text-white">
		<p class="label mb-6 text-amber">{m['deploy.enterpriseLabel']()}</p>
		<h3 class="display text-[clamp(36px,4.5vw,64px)] leading-none">{m['deploy.enterpriseTitle']()}</h3>
		<p class="mt-6 max-w-[420px] leading-relaxed text-mist">
			{m['deploy.enterpriseText']()}
		</p>
		<p class="mt-5"><Soon class="text-amber" label={m['deploy.audit']()} /></p>
	</div>
</section>

<section id="pricing" class="mx-auto max-w-7xl px-8 py-24">
	<h2 class="display text-[clamp(36px,5vw,72px)] leading-none">{m['pricing.title']()}</h2>
	<p class="mt-4 mb-14 text-muted">{m['pricing.sub']()}</p>
	<div class="border-b border-navy">
		{#each plans as plan}
			<div
				class="reveal flex flex-wrap items-center gap-x-7 gap-y-3 border-t border-navy py-7.5 {plan.highlight
					? 'bg-amber px-6'
					: ''}"
			>
				<h3 class="display flex-[1_1_180px] text-4xl">{plan.name}</h3>
				<p class="display flex-[1_1_140px] text-6xl">
					{euro.format(plan.price)}
					<small
						class="mt-1.5 block font-sans text-[13px] font-medium tracking-normal {plan.highlight
							? 'text-navy'
							: 'text-muted'}">{plan.vat()}</small
					>
				</p>
				<p class="flex-[2_1_280px] leading-loose {plan.highlight ? 'text-navy' : 'text-muted'}">
					{plan.includes()}
					{#if plan.soon}<Soon class="ml-1 text-navy" />{/if}
				</p>
			</div>
		{/each}
	</div>
</section>

<section class="bg-amber">
	<div class="mx-auto max-w-7xl px-8 pt-18">
		<h2 class="display max-w-[700px] text-[clamp(36px,5vw,72px)] leading-none">
			{m['cta.title']()}
		</h2>
		<div class="mt-8"><a href="#" class="btn bg-navy text-white">{m['hero.cta']()}</a></div>
	</div>
</section>
