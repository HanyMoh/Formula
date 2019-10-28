import React from "react";
import NavBar from './navBar'
import { ToastContainer } from 'react-toastify';
import Categories from './categories';
import Articles from './articles';
import { Route, Switch } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css'
import '../utils/index.css'

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <ToastContainer 
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnVisibilityChange
          draggable
          pauseOnHover
        />
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
