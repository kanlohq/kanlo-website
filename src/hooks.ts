import type { Reroute } from '@sveltejs/kit';
import { deLocalizeUrl } from './lib/paraglide/runtime.js';

// Maps `/de/impressum` back to the canonical route `/impressum`.
export const reroute: Reroute = (request) => deLocalizeUrl(request.url).pathname;
