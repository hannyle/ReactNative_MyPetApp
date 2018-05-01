import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import {StackNavigator} from 'react-navigation';
import HomeScreen from './components/Home.js';
import FoodScreen from './components/Food.js';
import HealthScreen from './components/Health.js';
import SoundScreen from './components/Sounds.js';
import PetshopScreen from './components/Petshop.js';
import VetScreen from './components/Vet.js';
import DailycareScreen from './components/Dailycare.js';
import PigprofileScreen from './components/Pigprofile.js';
import PigDataScreen from './components/PigData.js';
import {Font, AppLoading} from 'expo';
import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCkl_2rQvI-r0H2IedhchwImu-qywc9nSU",
  authDomain: "reactnativeproject-2f5c5.firebaseapp.com",
  databaseURL: "https://reactnativeproject-2f5c5.firebaseio.com",
  storageBucket: "reactnativeproject-2f5c5.appspot.com",
};
firebase.initializeApp(firebaseConfig);

const MyApp = StackNavigator(
  {
    Home: {screen: HomeScreen}, 
    Food: {screen: FoodScreen},
    Health: {screen: HealthScreen},
    Sounds: {screen: SoundScreen},
    Petshop: {screen: PetshopScreen},
    Vet: {screen: VetScreen},
    Dailycare: {screen: DailycareScreen},
    Pigprofile: {screen: PigprofileScreen},
    PigData: {screen: PigDataScreen}
  },     
  {
    initialRouteName: 'Home',
  }
);

export default class App extends React.Component {
  state = {
    loaded: false,
  }
  
  componentDidMount() {
    this._loadFontsAsync();
  }

  _loadFontsAsync = async() =>{    
      await Font.loadAsync({
        'open-sans-semi-bold': require('./assets/fonts/OpenSans-SemiBold.ttf'), 
        'raleway-medium': require('./assets/fonts/Raleway-Medium.ttf'),
        'raleway-semi-bold': require('./assets/fonts/Raleway-SemiBold.ttf')
      });          
        this.setState({loaded: true});
  }
  render() { 
    if (!this.state.loaded) {
      return <AppLoading />;
    }    
    return <MyApp/>;     
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'   
  },
});
