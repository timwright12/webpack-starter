/**
 * Helping set styles on the skipper element inside a loop
 * @example: setStylesOnElement( { opacity: '0', 'position': 'absolute' }, el );
 */
function setStylesOnElement( styles, element ) {
	Object.assign( element.style, styles );
}

export { setStylesOnElement };
