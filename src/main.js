/**
 * Import
 */
import WebFont from 'webfontloader';
import Example from './components/example-component/example-component';

/**
 * Execute
 */
Example.init( '#example' );

WebFont.load( {
	google: {
		families: ['Open Sans']
	}
} );
