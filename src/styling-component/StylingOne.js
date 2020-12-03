import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const StylingOne = () => {
    return (
      <View style={styles.container}>
        <Text style={styles.red}>merah kecil</Text>
        <Text style={styles.bigBlue}>biruuuu</Text>
        <Text style={[styles.bigBlue, styles.red]}>merah gede nihhh</Text>
        <Text style={[styles.red, styles.bigBlue]}>biru juga gedeee</Text>
      </View>
    );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
});

export default StylingOne;