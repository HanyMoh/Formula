import React from "react";
import Home from './Home';
import NavBar from './navBar'
import Categories from './Categories';
import NewCategory from './NewCategory';
import { Route, Switch } from 'react-router-dom'
import '../packs/index.css'

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <main className="container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/categories" component={Categories} />
            <Route exact path="/newCategory" component={NewCategory} />
          </Switch>
        </main>
      </React.Fragment>
    )
  }
}

export default App;
