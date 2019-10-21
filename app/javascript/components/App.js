import React from "react";
import Home from './Home';
import Categories from './Categories';
import NewCategory from './NewCategory';
import { Route, Switch } from 'react-router-dom'

class App extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/categories" component={Categories} />
          <Route exact path="/newCategory" component={NewCategory} />
        </Switch>
      </div>
    )
  }
}

export default App;
