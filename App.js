import React, { Component } from 'react'
import { Text, View } from 'react-native'
import ClassComponent from './src/functional-class-component/ClassComponent';
import FunctionalComponent from './src/functional-class-component/FunctionalComponent';

export default class App extends Component {
  render() {
    return (
      <View>
        <FunctionalComponent />
        <ClassComponent />
      </View>
      // <Text>AWIEJIAEJ</Text>
    )
  }
}
