import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

export default class ImageComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <Image 
          source={{uri: 'https://i.pinimg.com/originals/4e/74/7c/4e747c82368d9681b75d54f56319dae7.png'}} 
          style={{width: 200, height: 200}}/>
      </View>
    );
  }
}
