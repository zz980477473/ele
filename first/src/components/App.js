import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import routes from '@/router/app';
import NoMatch from '@/components/NoMatch';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Switch>
          {
            routes.map((item, index) => {
              return (
                <Route path={ item.path } component = { item.component } key = { index } />
              )
            })
          }
          <Redirect from = '/' to = '/home' />
          <Route component = { NoMatch } />
        </Switch>
      </div>
    )
  }
}

export default App;
