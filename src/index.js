// import React from 'react';
// import ReactDOM from 'react-dom';
//
// // IMPORTANT!!!! uncomment the lines below to make your tests work
// /*
// ReactDOM.render(
//   meInReact,
//   document.getElementById('global')
// );
//
// export default meInReact
// */

import React from 'react';
import ReactDOM from 'react-dom';

// const title = React.createElement('h1', {}, 'some text');
// const paragraph = React.createElement('p', {}, 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.');
// const container = React.createElement('div', {}, [title, paragraph]);
// const list = React.createElement(
//   'ol',
//   {},
//   [
//     React.createElement('li', {}, 'item'),
//     React.createElement('li', {}, 'item'),
//     React.createElement('li', {}, 'item')
//   ]
// );
//
// ReactDOM.render(
//   list,
//   document.querySelector('#global')
// );

const list =
  React.createElement('div', {},
    React.createElement('h1', {}, 'My favorite ice cream flavors'),
    React.createElement('ul', {},
      [
        React.createElement('li', { className : 'brown' }, 'Chocolate'),
        React.createElement('li', { className : 'red' }, 'Vanilla'),
        React.createElement('li', { className : 'red' }, 'Banana')
      ]
    )
  );

ReactDOM.render(
  list,
  document.getElementById('global')
);





















/****/
