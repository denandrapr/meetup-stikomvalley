import React, { Component } from 'react'
import { Text, View, TextInput } from 'react-native'

export default class TextInputComponent extends Component {
    render() {
        return (
            <View>
                <TextInput
                    style={{
                    height: 40,
                    borderColor: 'gray',
                    borderWidth: 1
                    }}
                    defaultValue="You can type in me"
                />
            </View>
        )
    }
}
