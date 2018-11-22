import React from 'react'; // eslint-disable-line no-unused-vars
import ReactDOM from 'react-dom';

const title = 'React Library Boilerplate';
const entryPoint = 'entry';

export const init = () => {
  ReactDOM.render(
    <div>{title}</div>,
    document.getElementById(entryPoint)
  );
};
