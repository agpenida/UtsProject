import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';

const dps = require('./img/anggota.png');


export default class Main extends React.Component {
  static navigationOptions = {
    title: 'Pendaftar Anggota HMJ'
  };
  render() {
    return (
      <ScrollView>
        <View style={styles.containerMain}>
          <View style={styles.boxParent}>
            <View>
  
              <View style={styles.box1}>
              <TouchableOpacity
              style={styles.button}
                onPress={() => this.props.navigation.navigate('dBdg')}
              >
                <Text>Anggota 1</Text>
              </TouchableOpacity>  
              </View>

              <View style={styles.box1}>
              <TouchableOpacity
              style={styles.button}
                onPress={() => this.props.navigation.navigate('dBgl')}
              >
                <Text>Anggota 2</Text>
              </TouchableOpacity>  
              </View>              

              <View style={styles.box1}>
              <TouchableOpacity
              style={styles.button}
                onPress={() => this.props.navigation.navigate('dBlg')}
              >
            </View>
          <View>

            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  containerMain: {
    // backgroundColor: '#E0E0E0',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    margin: 5,
    alignItems: 'center',
  },
  boxParent: {
    backgroundColor: '#E0E0E0',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
  },
  boxPar: {
    flex: 1,
    flexDirection: 'column'
  },
  box1: {
    height: 50,
    width: '100%',
    backgroundColor: '#9E9E9E',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 0.5,
    marginTop: 20
  },
  box2: {
    height: 20,
    width: 220,
    backgroundColor: '#80DEEA',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0097A7',
    height: 40,
    width: '100%',
    marginLeft: 5,
    marginRight: 5,
  },
  icon: {
    height: 80,
    width: 130,
    marginBottom: 0
  },
  textCap: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 3
  },
  textButton: {
    fontWeight: 'bold',
    fontSize: 20
  }
});
