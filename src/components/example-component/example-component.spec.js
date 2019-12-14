import puppeteer from 'puppeteer';

const APP = 'https://google.com';
const width = 1440;
const height = 860;

let page;
let browser;

beforeAll( async () => {

	browser = await puppeteer.launch( {
		headless: true,
	} );

	page = await browser.newPage();

	await page.setViewport( {
		width,
		height
	} );

} );

describe( 'Test Group', () => {

	test( 'First Example Test', async () => {

		// Visit the page in headless Chrome
		await page.goto( APP );

	} );

} );

afterAll( () => {
	browser.close();
} );
