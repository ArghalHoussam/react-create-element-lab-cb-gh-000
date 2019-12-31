import React from 'react';
import ReactDOM from 'react-dom';

// IMPORTANT!!!! uncomment the lines below to make your tests work
const meInReact = React.createElement(
  'div',
  { className : 'me'},
  [
    React.createElement('h1', {}, 'a muslim person'),
    React.createElement('p', {}, 'who is learning react'),
    React.createElement(
      'ul',
      { className: 'my-interests' },
      [
        React.createElement('li', {}, 'React'),
        React.createElement('li', {}, 'JavaScript'),
        React.createElement('li', {}, 'Series'),
      ]
    )
  ]
);
ReactDOM.render(
  meInReact,
  document.getElementById('global')
);

export default meInReact





/****/
