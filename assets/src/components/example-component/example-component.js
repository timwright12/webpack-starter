/**
 * Example class component
 */
class Example {

	/**
	 * Constructor function to hold button actions
	 * @param {object} navButton DOM object
	 */
	constructor( el ) {

		const self = this;

		if ( el ) {
			console.log( el );
			console.log( self );
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
