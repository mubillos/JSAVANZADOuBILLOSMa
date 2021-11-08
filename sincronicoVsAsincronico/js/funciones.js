function foo( x ) { return 2 * x; }
function bar( y ) { return foo( y + 5 ) - 10; }
function higherOrder( data, cb ) {
 if ( !cb || !( typeof cb === 'function' ) ) {
 throw new Error( 'Invalid callback. Please provide a function.' );
 }
 console.log( data );
 setTimeout( cb, 10 );
}


function fn_MostrarArray( cb, time ) {
 if ( !cb || !( typeof cb === 'function' ) ) {
 throw new Error( 'Invalid callback. Please provide a function.' );
 }
 setTimeout( cb, time );
}
