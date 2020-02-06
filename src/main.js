/**
 * Import
 */
import WebFont from 'webfontloader';
import ExampleClass from './components/example-class/example-class';
import exampleFunction from './components/example-function/example-function';
import exampleScopedFunction from './components/example-scoped/example-scoped';

/**
 * Execute functions and methods on DOM ready
 */
document.addEventListener( 'DOMContentLoaded', () => {

	// Example call if using a class
	ExampleClass.init( '#example' );

	// Example call if using a scoped method
	exampleScopedFunction.nestedMethod();

	// Normal imported function call
	exampleFunction();

	WebFont.load( {
		google: {
			families: ['Open Sans']
		}
	} );

} );
