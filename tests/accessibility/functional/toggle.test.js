describe( 'Google', () => {

	beforeAll( async () => {
		await page.goto('https://google.com');
	});

	it( 'Should display "google" text on page', async () => {
		await expect(page).toMatch('google');
	} );

});
