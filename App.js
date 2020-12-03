import React, { Component } from 'react'
import { Text, View } from 'react-native'
import ClassComponent from './src/functional-class-component/ClassComponent';
import FunctionalComponent from './src/functional-class-component/FunctionalComponent';
import ImageComponent from './src/other-component/ImageComponent';
import TextInputComponent from './src/other-component/TextInputComponent';
import StylingOne from './src/styling-component/StylingOne';

export default class App extends Component {
  render() {
    return (
      <View>
        <FunctionalComponent />
        <ClassComponent />
        <ImageComponent />
        <TextInputComponent />
        <StylingOne />
      </View>
    )
  }
}
