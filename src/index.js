import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import 'normalize.css';
import './index.scss';

import Header from './component/Header/Header';
import Footer from './component/Footer/Footer';
import MainPage from './component/MainPage/MainPage';
import ThingsPage from './component/ThingsPage/ThingsPage';

const App = () => {
  return (
    <Router>
        <Header />
        <Switch>
          <Route path="/things">
            <ThingsPage />
          </Route>
          <Route path="/">
            <MainPage />
          </Route>
        </Switch>
        <Footer />
    </Router>
  )
};

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
