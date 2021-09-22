import React from 'react';
import Todos from '../../containers/Todos';
import { Switch, Route } from 'react-router-dom'

export default function App() {

  return (
  <>
    <Switch >
      <Route >
        <Todos />
      </Route>
    </Switch>
  </>
  );
}
