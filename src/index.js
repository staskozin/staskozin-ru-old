import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';


import 'normalize.css';
import './index.scss';

import ScrollToTop from './component/misc/ScrollToTop';
import Header from './component/Header/Header';
import Footer from './component/Footer/Footer';
import MainPage from './component/MainPage/MainPage';
import ThingsPage from './component/ThingsPage/ThingsPage';

const App = () => {
  return (
    <Router>
      <ScrollToTop />
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
