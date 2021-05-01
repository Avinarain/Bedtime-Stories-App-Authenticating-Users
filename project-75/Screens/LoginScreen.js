import React from 'react';
import { Text, View, TouchableOpacity, TextInput, Image, StyleSheet, KeyboardAvoidingView, Alert } from 'react-native';
import * as firebase from 'firebase'
import db from '../config.js'

export default class LoginScreen extends React.Component{
  constructor(){ 
    super(); 
    this.state={ 
     emailId : '',
     password: '' 
     }}
  login=async(email,password)=>{
  if(email && password){
    try{
      const response= await firebase.auth().signInWithEmailAndPassword(email,password);
      if(response){
        this.props.navigation.navigate('WRITING');
      }
    }
    catch(error){
    switch(error.code){
      case "auth/user-not-found":
      alert.Alert("User doesn't exist")
      break;
      case "auth/invalid-email":
      alert.Alert("Incorrect email or password")
    }
    }
  }else{
    alert.Alert("Enter email and password")
  }
  }

  render(){
    return(
      <KeyboardAvoidingView style={{flex:1}}>
      <View>
      <Text style={styles.header}>
      <Text style={styles.headerText}>Story Hub App</Text>
      </Text>
      </View>
      <Image 
      source={require('../assets/booklogo.gif')}
      style={{width:250,height:250,marginTop:20,alignSelf:'center',borderWidth:2}}/>
     <View>
     <TextInput style={styles.loginBox}
     placeholder="abc@example.com"
     keyboardType="email-address"
     onChangeText={(text)=>
     {this.setState({
       emailId:text
     })}}/>
     <TextInput style={styles.loginBox}
     secureTextEntry={true}
     placeholder="Enter password"
     onChangeText={(text)=>
     {this.setState({
       password:text
     })}}/>
     
     </View>
     <View>
     <TouchableOpacity style={{height:30,width:85,borderWidth:2,alignSelf:'center',backgroundColor:"cyan"}}
     onPress={()=>{
       this.login(this.state.emailId,this.state.password)
     }}>
     <Text style={{alignSelf:'center',fontWeight:'bold'}}>Login</Text>
     </TouchableOpacity>
     </View>
     </KeyboardAvoidingView>
      
    );
  }
}

const styles=StyleSheet.create({
  loginBox:{
    width: 300, 
    height: 40, 
    borderWidth:2, 
    fontSize: 20, 
    margin:10,
    marginTop:20, 
    paddingLeft:10,
    borderColor:"cyan",
    alignSelf:'center'
  },
    header: {
    textAlign: 'center',
    backgroundColor: 'cyan'
  },
   headerText: {
    fontFamily: 'britannic',
    fontSize: 35,
    textAlign: 'center',
    padding: 5,
  },
})