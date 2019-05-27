import React from 'react';
import ReactDOM from 'react-dom';
import TableHeader from './table-header';

it('TableHeader renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TableHeader />, div);
  ReactDOM.unmountComponentAtNode(div);
});
