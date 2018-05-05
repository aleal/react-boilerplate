import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './header';
import Home from './home';
class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
        </Switch>
      </div>
    );
  }
}

export default App;