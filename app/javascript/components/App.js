import React from "react";
import NavBar from './navBar'
import Categories from './categories';
import Articles from './articles';
import { Route, Switch } from 'react-router-dom'
import '../utils/index.css'

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <main className="container">
          <Switch>
            <Route exact path="/categories" component={Categories} />
            <Route exact path="/articles" component={Articles} />
          </Switch>
        </main>
      </React.Fragment>
    )
  }
}

export default App;
