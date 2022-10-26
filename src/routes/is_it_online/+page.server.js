import { invalid } from '@sveltejs/kit';

export const actions = {
    default: async (event) => {
        //const dnsPromises = require('node:dns').promises;
        const formData = await event.request.formData();
        const url = formData.get('url');
        const isReachable = await import('is-reachable');
        return await isReachable.default(url);
    }
}
