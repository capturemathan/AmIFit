import React, { Component } from 'react';
import { AppRegistry, StyleSheet, TouchableHighlight, Text, View, Image } from 'react-native';

export default class HomeScreen extends Component {

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Am I Fit</Text>
        <Image
         style ={{
          justifyContent:'center',
          width: 180,
          height: 180,
          marginBottom: 30,
          borderRadius:30
      }}
          source={require('../assets/images/muscle.png')}
        />
        <TouchableHighlight 
                style ={{
                    justifyContent:'center',
                    width: 250,
                    height: 60,
                    borderRadius:10,
                    backgroundColor : "black",
                }}
                onPress={()=> navigate("Content")}>
            <Text style={{fontFamily: "manropethin", textAlign:'center', color:"white", fontSize: 25}}>Let's Go</Text>
          </TouchableHighlight>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontFamily: "oleoscriptreg",
    fontSize: 50,
    textAlign: 'center',
    marginBottom:20,
    color: '#333333'
  }
});

AppRegistry.registerComponent('HomeScreen', () => HomeScreen);