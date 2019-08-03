import React, { Component } from 'react';
import { Text, View, AppRegistry } from 'react-native';


export class Greenting extends Component {
    render() {
        return (
            <View style={{ alignItems: 'center' }}>
                <Text>Hello {this.props.name}!</Text>
            </View>
        );
    }
}

AppRegistry.registerComponent('Names', () => Greeting);