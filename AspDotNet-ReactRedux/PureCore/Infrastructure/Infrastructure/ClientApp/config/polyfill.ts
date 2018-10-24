'use strict';

// import 'event-source-polyfill';
// import 'core-js/modules/es6.symbol';
// import 'core-js/modules/es6.array.iterator';
// import 'core-js/modules/es6.promise';
// import 'core-js/modules/es7.array.includes';
// import 'core-js/es6/object';
// import 'core-js/es6/map';
// import 'core-js/es6/set';
// import 'isomorphic-fetch';
// import 'raf/polyfill';

//let pliep = Object.assign({}, {plop: 'pliep'});
console.log('polyfill!');
//var x = new Set();

if (typeof Promise === 'undefined') {
  // Rejection tracking prevents a common issue where React gets into an
  // inconsistent state due to an error, but it gets swallowed by a Promise,
  // and the user has no idea what causes React's erratic future behavior.
  require('promise/lib/rejection-tracking').enable();
  (window as any).Promise = require('promise/lib/es6-extensions.js');
}
// // fetch() polyfill for making API calls.
// require('whatwg-fetch');

// // Object.assign() is commonly used with React.
// // It will use the native implementation if it's present and isn't buggy.
// Object.assign = require('object-assign');

// // In tests, polyfill requestAnimationFrame since jsdom doesn't provide it yet.
// // We don't polyfill it in the browser--this is user's responsibility.
// if (process.env.NODE_ENV === 'test') {
//   require('raf').polyfill(global);
// }
