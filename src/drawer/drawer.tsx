import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from '../views/Home';
import Notifications from '../views/Notifications';

const Drawer = createDrawerNavigator();

export function DrawerNav() {
  return (
    <Drawer.Navigator >
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Notifications" component={Notifications} />
    </Drawer.Navigator>
  );
}
