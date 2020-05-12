import React from 'react';
import {
  Switch,
  Route,
  useRouteMatch
} from "react-router-dom";

import List from './List/List';
import RiceCalculator from './RiceCalculator/RiceCalculator';
import Transliterator from './Transliterator/Transliterator';
import Concatenator from './Concatenator/Concatenator';
import DuplicateRemover from './DuplicateRemover/DuplicateRemover';

import './things.scss';

export default function ThingsPage() {
  let match = useRouteMatch();
  return (
    <>
      <Switch>
        <Route path={`${match.path}/rice-calculator`}>
          <RiceCalculator />
        </Route>
        <Route path={`${match.path}/transliterator`}>
          <Transliterator />
        </Route>
        <Route path={`${match.path}/concatenator`}>
          <Concatenator />
        </Route>
        <Route path={`${match.path}/duplicate-remover`}>
          <DuplicateRemover />
        </Route>
        <Route path={match.path}>
          <List path={match.path} />
        </Route>
      </Switch>
    </>
  )
}
