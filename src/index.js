import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import './css/normalize.css';
import './css/styles.css';

import StorePicker from './components/StorePicker';
import App from './components/App';
import NotFound from './components/NotFound';

import registerServiceWorker from './registerServiceWorker';

const Root = () =>{
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={StorePicker} />
        <Route path="/store/:storeId" component={App} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
