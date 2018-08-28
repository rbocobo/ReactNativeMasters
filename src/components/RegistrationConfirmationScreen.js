
import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Subscription = (subscribe) => {
    if(subscribe)
    return(
        <Text>Subscribed to Newsletter</Text>
    )
}

class RegistrationConfirmationScreen extends Component {
    render() {
        const { navigation } = this.props;
        return (
            <View style={styles.container}>
                <View>
                    <Text>{navigation.getParam('firstName')} {navigation.getParam('lastName')}</Text>
                </View>
                <View>
                    <Text>{navigation.getParam('email')}</Text>
                </View>
                <View>{Subscription(navigation.getParam('subscribe'))}</View>
                <View style={styles.actionButtons}>
                    <Button title="Back to Registration" onPress={() => this.props.navigation.navigate("Main")}></Button>
                    <Button title="Back to Main" onPress={() => this.props.navigation.navigate("Home")}></Button>
                </View>
                
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        padding: 20
    },
    actionButtons: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    }
});

export default RegistrationConfirmationScreen;