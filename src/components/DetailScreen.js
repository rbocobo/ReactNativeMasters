import React, {Component} from 'react';
import { View, Text, TextInput } from 'react-native';


const detailScreen = ({navigation}) => (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Hello {navigation.getParam('name','Jose Rizal')}</Text>
        <Text>You are on the Details Screen</Text>
    </View>
)

export default detailScreen;
