import React from 'react';
import { View, Text, Button } from 'react-native';

export default class DetBdg extends React.Component {
  static navigationOptions = {
    title: 'Detail Ketua',
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
