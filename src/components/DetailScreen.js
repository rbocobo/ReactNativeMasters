import React, {Component} from 'react';
import { View, Text, TextInput } from 'react-native';

export default class detailScreen extends Component {
    static navigationOptions = {
        title: "This is a new Title"
    };

    render() {
        const { navigation } = this.props;
        return(
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Hello {navigation.getParam('name','Jose Rizal')}</Text>
            <Text>You are on the Details Screen</Text>
            </View>
        )
    }
}
