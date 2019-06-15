// If you need debounce; if not, don't leave this in - it's just an example
import debounce from 'lodash.debounce'; 

/**
 * Example class component
 */
class Example {

	/**
	 * Constructor function to hold stuff
	 * @param {object} element DOM object
	 */
	constructor( el ) {

		const self = this;

		if ( el ) {
			console.log( el );
			console.log( self );
			console.log( debounce );
		}
	}

	/**
	 * Init function definition
	 * @param {object} el selector
	 * @returns {object} The element itself
	 */
	static init( el ) {
		const elem = document.querySelector( el );
		return elem ? new Example( elem ) : false;
	}
}

export default Example;
