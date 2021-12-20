import React from 'react'
import { View, Text } from 'react-native'

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native'

import CallScreen from '../screens/CallScreen'
import CallingScreen from '../screens/CallingScreen'
import ContactsScreen from '../screens/ContactsScreen'
import IncomingCallScreen from '../screens/IncomingCallScreen'

const Stack = createNativeStackNavigator();

const index = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Contacts'>
                <Stack.Screen name="Contacts" component={ContactsScreen} />
                <Stack.Group screenOptions={{headerShown: false}}>
                    <Stack.Screen name="Call" component={CallScreen} />
                    <Stack.Screen name="Calling" component={CallingScreen} />
                    <Stack.Screen name="IncomingCall" component={IncomingCallScreen} />
                </Stack.Group>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default index
