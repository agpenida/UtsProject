import React from 'react';
import { View, Text, Button } from 'react-native';

export default class DetBgl extends React.Component {
  static navigationOptions = {
    title: 'Detail Wakil Ketua',
  };render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    );
  }
}
