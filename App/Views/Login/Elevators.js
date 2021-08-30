import React, {Component,useEffect, useState } from 'react';
import { Button, View, Text, FlatList, TouchableOpacity, ScrollView, Image } from 'react-native';
import LoginView from './LoginView';

class Elevators extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      dataSource:[]
     };
   }
 
  componentDidMount(){
    fetch("https://rocketrestapi.azurewebsites.net/api/elevators/NotActive")
    .then(response => response.json())
    .then((responseJson)=> {
      this.setState({
       dataSource: responseJson
      })
      console.log(responseJson);
    })
    .catch(error=>console.log(error)) //to catch the errors if any
    }

    render(){
     return(
       <ScrollView>
      <View style={{padding:10}}>
      <Image
              source={require('../../../assets/logo1.png')}
              style={styles.logotype}
            />
      <FlatList
      padding ={30}
         data={this.state.dataSource}
         renderItem={({item}) => 
         <View style={{height: 50}}>
         <TouchableOpacity
            style={{color: 'red'}}
            onPress={() => { 
               this.props.navigation.navigate("ElevatorStatus", { item })}} 
          >
            <Text style={styles.loginButtonText}>{item.id}</Text>
          </TouchableOpacity>
         </View>
        }
       />
      
     </View>
     </ScrollView>
     )}
}
 const utils = {
  colors: {primaryColor: '#af0e66'},
  dimensions: {defaultPadding: 12},
  fonts: {largeFontSize: 18, mediumFontSize: 16, smallFontSize: 12},
};

const styles = {
  innerContainer: {
    marginBottom: 32,
  },
  logotypeContainer: {
    alignItems: 'center',
  },
  logotype: {
    maxWidth: 280,
    maxHeight: 100,
    resizeMode: 'contain',
    alignItems: 'center',
  },
  containerStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f6f6f6',
  },
  input: {
    height: 50,
    padding: 12,
    top: 50,
    backgroundColor: 'white',
    borderRadius: 6,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    marginBottom: utils.dimensions.defaultPadding,
  },
  loginButton: {
    borderColor: utils.colors.primaryColor,
    borderWidth: 2,
    top: 50,
    padding: utils.dimensions.defaultPadding,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
  },
  loginButtonText: {
    color: utils.colors.primaryColor,
    fontSize: utils.fonts.mediumFontSize,
    fontWeight: 'bold',
  },
  errorMessageContainerStyle: {
    marginBottom: 8,
    backgroundColor: '#fee8e6',
    padding: 8,
    borderRadius: 4,
  },
  errorMessageTextStyle: {
    color: '#db2828',
    textAlign: 'center',
    fontSize: 12,
  },
};

export default Elevators;