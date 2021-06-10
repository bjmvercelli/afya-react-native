import React from 'react';
import Home from './screens/Home';
import Afya from './screens/Afya';
import Contact from './screens/Contact';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
 
const { Navigator, Screen } = createStackNavigator();


export default function Route(){
    return(
        <NavigationContainer>
            <Navigator>
                <Screen
                    name="Home"
                    component={Home}
                />
                <Screen
                    name="Afya"
                    component={Afya}
                />
                <Screen
                    name="Contact"
                    component={Contact}
                />
            </Navigator>
        </NavigationContainer>
    )
}