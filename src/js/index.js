import '../scss/main.scss';

import React from 'react';
import ReactDom from 'react-dom';

const App = () => {
  return (
    <div className="address ">
      <code className="contact ">
        <p>Hello! </p>
      </code>
    </div>
  );
};

ReactDom.render(<App />, document.getElementById('app'));
