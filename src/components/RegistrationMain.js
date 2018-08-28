import React, { Component } from 'react';
import { createStackNavigator } from  'react-navigation';
import RegistrationScreen from './RegistrationScreen';
import RegistrationConfirmationScreen from './RegistrationConfirmationScreen';

const RegMainStack = createStackNavigator({
        Main: {
            screen: RegistrationScreen
        },
        Confirm: {
            screen: RegistrationConfirmationScreen
        }
    },
    {
        mode: 'modal',
        headerMode: 'none'
    }
)

const RegistrationMain = (props) => {
    return (
        <RegMainStack></RegMainStack>
    )
}

export default RegistrationMain