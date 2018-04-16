import React from 'react';
import { View, Text, Button } from 'react-native';

export default class DetBlg extends React.Component {
  static navigationOptions = {
    title: 'Detail Bendahara',
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
