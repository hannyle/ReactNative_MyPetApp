import React from 'react';
import { StyleSheet, Text, View, StatusBar, Image, TouchableHighlight, Alert, Button} from 'react-native';
import {Header, Icon, Card, Avatar} from 'react-native-elements';
import {Font, AppLoading} from 'expo';

export default class HomeScreen extends React.Component {
  static navigationOptions = ({navigation}) => { 
    return {
        header: (
         <View style={{flex: 0.15, flexDirection: 'column'}}>
            <View style={{backgroundColor: '#aaa7a2', flex: 1}} />  
            <Header  outerContainerStyles= {{flex: 1, backgroundColor :"#3f3a38", borderBottomWidth: 0}} 
                leftComponent={{ icon: 'home', color: '#f9f8f6', size: 28}}                         
                centerComponent={{ text: 'HOME', style: styles.header}}                   
                innerContainerStyles= {{alignItems: "center"}}
            /> 
         </View>
        )            
    }       
  };
   
    render() {
      const {navigate} = this.props.navigation;
      return (
        <View style={styles.container}>
          <View style={{flexDirection: "row"}}>
            <View style={{alignItems: "center", width: 90, marginLeft: 60, marginTop: 30}}>              
              <Avatar avatarStyle={styles.avatar} width={90} height={90} rounded source={require('../assets/my_pig2.jpg')} onPress={()=> navigate('Dailycare')}/>                          
              <Text style={styles.text}>MY PIG</Text>              
            </View> 
            <View style={{alignItems: "center", width: 90, marginLeft: 60, marginTop: 30}}>              
              <Avatar avatarStyle={styles.avatar} width={90} height={90} rounded source={require('../assets/pig_food.jpg')} onPress={()=> navigate('Food')}/>                                     
              <Text style={styles.text}>FOOD</Text>
            </View>           
          </View>
          <View style={{flexDirection: "row"}}>
            <View style={styles.avatarFrame}>            
              <Avatar avatarStyle={styles.avatar} width={90} height={90} rounded source={require('../assets/pig_health2.jpg')} onPress={()=> navigate('Health')}/>                                     
              <Text style={styles.text}>HEALTH</Text>
            </View>
            <View style={styles.avatarFrame}>             
              <Avatar avatarStyle={styles.avatar} width={90} height={90} rounded source={require('../assets/pig_sounds2.jpg')} onPress={()=> navigate('Sounds')}/>                          
              <Text style={styles.text}>SOUNDS</Text>
            </View>            
          </View>
          <View style={{flexDirection: "row"}}>
            <View style={styles.avatarFrame}>              
              <Avatar avatarStyle={styles.avatar} width={90} height={90} rounded source={require('../assets/pet_store.jpg')} onPress={()=> navigate('Petshop')}/>                 
              <Text style={styles.text}>PETSHOP</Text>
            </View>
            <View style={styles.avatarFrame}>              
              <Avatar avatarStyle={styles.avatar} width={90} height={90} rounded source={require('../assets/pig_vet.jpg')} onPress={()=> navigate('Vet')}/>                                   
              <Text style={styles.text}>VETS</Text>
            </View>            
          </View>                                    
        </View>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: "#5e5553"  
  },
  avatarFrame: {
    alignItems: "center", 
    width: 90, 
    marginLeft: 60, 
    marginTop: 20
  },  
  avatar: {
    borderWidth: 2,
    borderColor: "#f9f8f6"
  },
    text: {
    color: "#f9f8f6",
    fontFamily: 'raleway-medium',
    fontSize: 15,
    marginTop: 5,
    textAlign: "center"
  },
  header: {
    color: '#f9f8f6', 
    fontWeight: "500", 
    fontSize: 24,
    fontFamily: 'open-sans-semi-bold',
    fontWeight: "400"
  }
});

