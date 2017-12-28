import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import PickLocation from './components/PickLocation';
import Lobby from './components/Lobby';

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="locationPicker" component={PickLocation} title='Where in the world?' />
      <Scene key="lobby" component={Lobby} title='what next!' />
    </Router>
  );
};

export default RouterComponent;
