import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import App from '@/components/App';
import ErrorBoundary from '@/components/ErrorBoundary';
import * as serviceWorker from './serviceWorker';
import store from '@/store'
import './main.scss';

render ();

// store.subscribe(render);

function render () {
  ReactDOM.render(
    <ErrorBoundary>
      <Provider store = { store }>
        <Router>
          <Switch>
            <Route path='/' component = { App } />
          </Switch>
        </Router>
      </Provider>
    </ErrorBoundary>
    , document.getElementById('root'));
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
