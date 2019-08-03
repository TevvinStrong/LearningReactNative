import React, { Component } from 'react';
import { AppRegistry, Text, View } from 'react-native';


function Greeting(props) {
    return (
        <View>
            <Text>Hello {props.name}!</Text>
        </View>
    );
}

export default Greeting;