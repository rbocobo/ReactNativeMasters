import React, {Component} from 'react';
import { View, Text, TextInput, Button } from 'react-native';

export default class homeScreen extends Component {
    state = {
        name: ''
    };

    nameChangeHandler = (val) => {
        this.setState({
            name: val
        })
    }

    render() {
    const btnDisabled = this.state.name.trim() === '';
    return (<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <TextInput placeholder='Enter Your Name' value={this.state.name} style={{width:'100%'}} onChangeText={this.nameChangeHandler}/>
        <Button title='Go To Details' onPress={()=> this.props.navigation.navigate('Detail', { name: this.state.name })} disabled={btnDisabled}></Button>
    </View>);
    
    }
}
