import React, { Component } from 'react';
import { View, Text, TextInput, Button, Switch, StyleSheet } from 'react-native';

class RegistrationScreen extends Component {

    state = {
        lastName: '',
        firstName: '',
        email: '',
        subscribe: false
    }

    // static navigationOptions = {
    //     title: "Registration"
    // };

    onChangeLastName = (lastName) => {
        this.setState({lastName});
    }

    onChangeFirstName = (firstName) => {
        this.setState({firstName});
    }

    onChangeEmail = (email) => {
        this.setState({email});
    }

    onSubscribe = (subscribe) => {
        this.setState({subscribe});
    }

    Subscription = (subscribe) => {
        if(subscribe)
            return (
                <Text>You have subscribed to the newsletter</Text>
            );
    }

    onRegister = () => {
        this.props.navigation.navigate('Confirm');
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.fieldContainer}>
                    <TextInput style={styles.field} onChangeText={this.onChangeLastName}></TextInput>
                    <Text style={styles.field}>Last Name</Text>
                </View>
                <View style={styles.fieldContainer}>
                    <TextInput style={styles.field} onChangeText={this.onChangeFirstName}></TextInput>
                    <Text style={styles.field}>First Name</Text>
                </View>
                <View style={styles.fieldContainer}>
                    <TextInput style={styles.field} onChangeText={this.onChangeEmail}></TextInput>
                    <Text style={styles.field}>E-mail Address</Text>
                </View>
                <View  style={styles.fieldContainerRow}>
                    <Text style={styles.field}>Subscribe to Newsletter</Text>
                    <Switch value={this.state.subscribe} onValueChange={this.onSubscribe}></Switch>
                </View>
                <View style={styles.fieldContainer}>
                    {this.Subscription(this.state.subscribe)}                    
                </View>
                <View style={{ flex: 1, alignItems: 'center' }}>
                    <Button title="Register" onPress={this.onRegister}></Button>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection:'column',
        backgroundColor: '#E6E4F0'
    },
    fieldContainer: {
        padding: 10
    },
    fieldContainerRow: {
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    field: {
        fontSize: 16
    }
})

export default RegistrationScreen;