import React from 'react';
import ReactDOM from 'react-dom';

// const AnotherComponent = ({...props}) => {
// };

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
