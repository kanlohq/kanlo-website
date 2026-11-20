<script lang="ts">
	import { m } from '../paraglide/messages.js';
	import { getLocale } from '../paraglide/runtime.js';

	type Card = {
		title: () => string;
		tag: string;
		tone: 'amber' | 'moss';
		date: [number, number];
		who: string;
		lifted?: boolean;
		done?: boolean;
	};

	const columns: { name: () => string; cards: Card[] }[] = [
		{
			name: m['board.backlog'],
			cards: [
				{ title: m['board.card1'], tag: 'Docs', tone: 'moss', date: [11, 20], who: 'JH' },
				{ title: m['board.card2'], tag: 'Web', tone: 'amber', date: [11, 22], who: 'AM' }
			]
		},
		{
			name: m['board.inProgress'],
			cards: [
				{ title: m['board.card3'], tag: 'API', tone: 'amber', date: [11, 14], who: 'JH', lifted: true },
				{ title: m['board.card4'], tag: 'Design', tone: 'moss', date: [11, 18], who: 'LK' }
			]
		},
		{
			name: m['board.review'],
			cards: [{ title: m['board.card5'], tag: 'API', tone: 'amber', date: [11, 12], who: 'AM' }]
		},
		{
			name: m['board.done'],
			cards: [
				{ title: m['board.card6'], tag: 'Infra', tone: 'amber', date: [11, 5], who: 'JH', done: true },
				{ title: m['board.card7'], tag: 'Web', tone: 'amber', date: [11, 3], who: 'LK', done: true }
			]
		}
	];

	const dateFormat = new Intl.DateTimeFormat(getLocale(), { month: 'short', day: 'numeric' });
	const formatDate = ([month, day]: [number, number]) => dateFormat.format(new Date(2026, month - 1, day));
</script>

<div class="overflow-hidden rounded-[20px] bg-navy p-7">
	<div class="mb-5 flex flex-wrap items-baseline gap-x-5 gap-y-2 text-white">
		<span class="display text-2xl">{m['board.title']()}</span>
		<span class="font-mono text-xs text-mist">{m['board.meta']()}</span>
	</div>
	<div class="grid grid-cols-[repeat(auto-fit,minmax(210px,1fr))] gap-3.5">
		{#each columns as column}
			<div class="reveal flex flex-col gap-2.5">
				<span class="label p-0.5 text-mist">{column.name()}</span>
				{#each column.cards as card}
					<div
						class="flex flex-col gap-3 rounded-lg p-3.5 text-[15px] leading-snug transition-transform
						{card.lifted
							? 'bob -mr-1.5 ml-1.5 mt-1 bg-white text-navy shadow-2xl'
							: card.done
								? 'bg-moss text-white hover:-translate-y-1'
								: 'bg-navy-2 text-white hover:-translate-y-1'}"
					>
						{card.title()}
						<div class="flex items-center gap-2 font-mono text-xs {card.lifted ? 'text-muted' : 'text-mist'}">
							<span
								class="rounded px-2 py-0.5 text-[11px] font-semibold {card.tone === 'amber'
									? 'bg-amber text-navy'
									: 'bg-moss text-white'}">{card.tag}</span
							>
							{formatDate(card.date)}
							<span class="ml-auto grid size-6 place-items-center rounded-full bg-navy-3 font-sans text-[11px] font-semibold text-white">{card.who}</span>
						</div>
					</div>
				{/each}
			</div>
		{/each}
	</div>
</div>
