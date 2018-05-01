import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar, Image, TouchableHighlight, Alert, Button} from 'react-native';
import {Header, Icon, Card, Avatar} from 'react-native-elements';

  
export default class VetScreen extends Component {
    static navigationOptions = ({navigation}) => { 
        return {
            header: (
             <View style={{flex: 0.15, flexDirection: 'column'}}>
                <View style={{backgroundColor: '#aaa7a2', flex: 1}} />  
                <Header  outerContainerStyles= {{flex: 1, backgroundColor :"#1e130b", borderBottomWidth: 0}} 
                    leftComponent={{ icon: 'arrow-back', color: '#f9f8f6', size: 30, onPress: ()=>{ navigation.goBack()}}}                         
                    centerComponent={{ text: 'VETS', style: { color: '#f9f8f6', fontWeight: "bold", fontSize: 24}}}                   
                    innerContainerStyles= {{alignItems: "center"}}
                /> 
             </View>
            )            
        }       
    };

    render() {
        const {navigate} = this.props.navigation    
        return (
            <View style={styles.container}>
                <Text style={{color: "#f9f8f6"}}>This is Vet Page</Text>          
            </View>
        )
    }
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: "#5e5553"  
    },
})