/**
 * Example Scoped Function
 */
const exampleScopedFunction = {

	/**
	 * Example Nested Method
	 */
	nestedMethod: function() {
		this.nestedSecondMethod();
	},

	/**
	 * Example Second Nested Method
	 */
	nestedSecondMethod: function() {
		console.log( 'This method is scoped inside `exampleScopedFunction`' );
	}

};

export default exampleScopedFunction;
