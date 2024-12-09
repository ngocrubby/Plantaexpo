import React, {useContext, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Stacknavlogin from './Stacknavlogin';
import Main from './Main';
import {Appcontext} from './Appcontext';
const AppNavigation = () => {
  const {islogin} = useContext(Appcontext);
  return (
    <NavigationContainer>
      {islogin ? <Main /> : <Stacknavlogin />}
    </NavigationContainer>
  );
};

export default AppNavigation;
