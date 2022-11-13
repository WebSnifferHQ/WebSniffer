import { expect, test } from '@playwright/test';

test('domain has positive age', async ({request}) => {
	const response = await request.get("/domain-age?url=geeksforgeeks.org");

    const registeredDate = new Date((await response.json()).data);
    const today = new Date();

	//expect(await page.textContent('h1')).toBe('About this app');
    expect(registeredDate < today).toBeTruthy();
});
