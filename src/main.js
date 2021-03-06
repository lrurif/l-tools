
 "use strict";
const tools = require("./utils/table-chosen");

( function( global, factory ){
 if ( typeof module === "object" && typeof module.exports === "object" ) {
  module.exports = global.document ?
   factory( global, true ) :
   function( w ) {
    if ( !w.document ) {
     throw new Error( "Tools requires a window with a document" );
    }
    return factory( w );
   };
 } else {
  factory( global );
 }

} )( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {
 return tools;
});
