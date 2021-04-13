import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import PokeList from '../pages/PokeList';
import PokeDetails from '../pages/PokeDetails';

const { Navigator, Screen } = createStackNavigator();


function AppStack() {
    return (
        <NavigationContainer>
            <Navigator screenOptions={{ headerShown: false }} initialRouteName="PokeList">
                <Screen name="PokeList" component={PokeList} />
                <Screen name="PokeDetails" component={PokeDetails} />
            </Navigator>
        </NavigationContainer>
    );
}

export default AppStack;