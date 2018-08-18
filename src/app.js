import React from 'react';
import ReactDOM from 'react-dom';

const AnotherComponent = ({...props}) => {
};

const { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 };

class ExampleComponent extends React.Component {
  myMethod = () => {
  }
  render() {
    return (
      <div>
        Some text here
      </div>
    );
  }
}

ReactDOM.render(<ExampleComponent />, document.getElementById('app'));
