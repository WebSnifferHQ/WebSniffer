import { invalid } from '@sveltejs/kit';

export async function GET(request) {
    const urlToCheck = request.url.searchParams.get('url');
    const isReachable = await import('is-reachable');
    const isAlive =  await isReachable.default(urlToCheck);
    return new Response(JSON.stringify({
        url_to_check: urlToCheck,
        is_alive: isAlive
    }));
}
