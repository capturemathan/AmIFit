import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, TextInput,TouchableHighlight,ToastAndroid,Keyboard } from 'react-native';

export default class Content extends Component {

  constructor(props)
  {
    super(props);
    this.state={
      height:"",
      weight:"",
      bmi:"",
      underweight:false,
      normal:false,
      overweight:false,
      visible:false
    }
  }

  handlePress() {
    Keyboard.dismiss()
    this.state.underweight=false;
    this.state.normal=false;
    this.state.overweight=false;
    if((this.state.height>0) && (this.state.weight>0))
    {
      this.setState({visible:true})
      this.bmi=(this.state.weight)/((this.state.height*0.01)*(this.state.height*0.01));
      this.bmi= parseFloat(Math.round(this.bmi * 100) / 100).toFixed(2);
      if(this.bmi<18.50)
      {
        this.state.underweight=true;
      }
      if((this.bmi>=18.50) && (this.bmi<=24.90))
      {
        this.state.normal=true;
      }
      if(this.bmi>24.90)
      {
        this.state.overweight=true;
      }
    }
    else{
      ToastAndroid.show('Provide me correct details !', ToastAndroid.SHORT);
    }
 }

   render() {
    return (
      <View style={styles.container}>
        <Text style ={styles.textstyle}>Height (cm)</Text>
        <TextInput
        style={styles.placeholderstyle}
        placeholder="Enter height"
        onChangeText={(text) => this.setState({height:text})}
        selectionColor="black"
        keyboardType="numeric"
        underlineColorAndroid="black"/>
        <Text style ={styles.textstyle}>Weight (kg)</Text>
        <TextInput
        style={styles.placeholderstyle}
        placeholder="Enter weight"
        onChangeText={(text) => this.setState({weight:text})}
        selectionColor="black"
        keyboardType="numeric"
        underlineColorAndroid="black"/>
        <TouchableHighlight 
                style ={{
                    alignSelf:"center",
                    justifyContent:"center",
                    width: 250,
                    height: 60,
                    borderRadius:10,
                    backgroundColor : "black",
                }}
                onPress={() => this.handlePress()}
                >
            <Text style={{fontFamily: "manropethin", textAlign:'center', color:"white", fontSize: 25}}>Am I Fit ?</Text>
          </TouchableHighlight>
          {this.state.visible ? (
          <View style={styles.container2}>
          <Text style={styles.bmiYour}>Your BMI</Text>
          <Text style={styles.bmiCalc}>{this.bmi}</Text>
          </View>): null}
          {this.state.underweight ? (<Text style={styles.weighttxt}>You are in underweight category 😲 Plenty of nutritional foods to keep the doctor away.</Text>) : null}
          {this.state.normal ? (<Text style={styles.weighttxt}>You are in normal category 😀 Stay the same to keep the doctor away.</Text>) : null}
          {this.state.overweight ? (<Text style={styles.weighttxt}>You are in overweight category 😨 Exercise everyday to keep the doctor away.</Text>) : null}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop:20,
    flex: 1,
    backgroundColor: '#F5FCFF'
  },
  textstyle:{
    fontFamily: "manropethin",
    fontSize: 30,
    textAlign: 'center',
    marginBottom:20,
    color: '#333333'
  },
  placeholderstyle:{
    fontFamily: "manropethin",
    fontSize: 18,
    marginLeft:20,
    marginRight:20,
    marginBottom:25,
    color: '#333333'
  },
  bmiYour:{
    fontFamily: "manropethin",
    marginTop:40,
    marginLeft:20,
    fontSize: 30,
    color: '#333333'
  },
  bmiCalc:{
    fontFamily: "oleoscriptreg",
    marginTop:40,
    marginRight:20,
    fontSize: 30,
    color: '#333333'
  },
  container2:
  { marginBottom:35,  
    flexDirection:"row",
    justifyContent:"space-around"
  },
  weighttxt:{
    marginLeft:20,
    marginRight:20,
    fontFamily:"manropethin",
    fontSize: 25,
    color: '#333333'
  }
});

AppRegistry.registerComponent('Content', () => Content);