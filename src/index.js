import React from 'react';
import ReactDOM from 'react-dom';

// IMPORTANT!!!! uncomment the lines below to make your tests work
cont meInReact = createElement(
  'div',
  { className : 'me'},
  [
    createElement('h1', {}, 'a muslim person'),
    createElement('p', {}, 'who is learning react'),
    createElement(
      'ul', 
      { className: 'my-interests' },
      [
        createElement('li', {}, 'React'),
        createElement('li', {}, 'JavaScript'),
        createElement('li', {}, 'Series'),
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
