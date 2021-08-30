import React, {ComponentClass } from 'react';
import { Button, View, Text, TouchableOpacity, Image } from 'react-native';
import 'react-native-gesture-handler';

class ElevatorStatus extends React.Component {
  constructor(props) {
    super(props);
    const { item } = this.props.route.params;
    this.state = {
      Color: 'red',
      elevatorid: item.id,
      elevatorSerialNumber: item.serialNumber,
      elevatorStatus: item.status,
      elevatorModel: item.model,
      elevatornotes: item.notes
    };
  }
 
  statusChange = async () => {
    const id = this.state.elevatorid
    console.log(id);
    return await fetch(`https://rocketrestapi.azurewebsites.net/api/elevators/${id}?status=Active`, {
      method: 'PUT'
    }).then(
       this.setState({
      Color: 'green',
      elevatorStatus: 'Active'})
      ); 
  };
render() {
    return (
      <View>
      <Image
              source={require('../../../assets/logo1.png')}
              style={styles.logotype}
            />
        <Text> The ID: {this.state.elevatorid}</Text>
        <Text> The Serial Number: {this.state.elevatorSerialNumber}</Text>
        <Text style={{backgroundColor: this.state.Color}}> The Status: {this.state.elevatorStatus}</Text>
        <Text> The Model: {this.state.elevatorModel }</Text>
        <Text> The Notes: {this.state.elevatornotes}</Text>
        <TouchableOpacity style={styles.loginButton}
          onPress={() => this.statusChange() }>
          <Text>SET STATUS TO ACTIVE</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginButton}
          onPress={() =>  this.props.navigation.navigate("Elevators" , { refresh: true }) }>
          <Text>Return To Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginButton}
          onPress={() =>  this.props.navigation.navigate("Login" , { refresh: true }) }>
          <Text>LogOut</Text>
        </TouchableOpacity>
      </View>
    );
  }
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
export default ElevatorStatus;