import type { Handle } from '@sveltejs/kit';
import { sequence } from '@sveltejs/kit/hooks';
import { paraglideMiddleware } from './lib/paraglide/server.js';
import { baseLocale, cookieName, extractLocaleFromHeader, localizeUrl } from './lib/paraglide/runtime.js';

// First visit to `/` without a locale cookie: send visitors to their browser language.
const firstVisit: Handle = async ({ event, resolve }) => {
	const isFirstVisit =
		event.request.method === 'GET' && event.url.pathname === '/' && !event.cookies.get(cookieName);
	if (isFirstVisit) {
		const preferred = extractLocaleFromHeader(event.request);
		if (preferred && preferred !== baseLocale) {
			const target = localizeUrl(event.url, { locale: preferred });
			return new Response(null, {
				status: 302,
				headers: {
					location: target.pathname + target.search,
					'set-cookie': `${cookieName}=${preferred}; Path=/; Max-Age=34560000; SameSite=Lax`
				}
			});
		}
	}
	return resolve(event);
};

const i18n: Handle = ({ event, resolve }) =>
	paraglideMiddleware(event.request, ({ request, locale }) => {
		event.request = request;
		return resolve(event, {
			transformPageChunk: ({ html }) => html.replace('%paraglide.lang%', locale)
		});
	});

export const handle = sequence(firstVisit, i18n);
