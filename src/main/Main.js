import React from 'react';
import {Route, Switch } from 'react-router-dom';
import WeatherTable from './WeatherTable';

function Main() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={WeatherTable}/>
      </Switch>
    </div>
  )
}

export default Main;