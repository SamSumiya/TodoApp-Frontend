import React from 'react';
import Todos from '../../containers/Todos';
import { Switch, Route } from 'react-router-dom';
import './App.css'

export default function App() {
  return (
    <div>
      <Switch>
        <Route>
          <Todos />
        </Route>
      </Switch>
    </div>
  );
}
