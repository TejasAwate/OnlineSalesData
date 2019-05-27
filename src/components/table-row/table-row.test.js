import React from 'react';
import ReactDOM from 'react-dom';
import TableRow from './table-row.js';

it('TableRow renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TableRow />, div);
  ReactDOM.unmountComponentAtNode(div);
});
