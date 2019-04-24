import React from 'react';
// import { render } from "react-dom"
import Results from '../Results';
import Details from '../Details';
import { Router, Link } from '@reach/router';

class App extends React.Component {
  render() {
    return (
      <Link to="/" className="App">
        <h1>Adopt me!</h1>
        <Router>
          <Results path="/" />
          <Details path="/details/:id" />
        </Router>
      </Link>
    );
  }
}

export default App;
