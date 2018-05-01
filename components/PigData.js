import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View, StatusBar, Image, TouchableHighlight, Alert, ScrollView, TouchableOpacity} from 'react-native';
import {Header, Icon, Card, Avatar, Button} from 'react-native-elements';
import { ImagePicker, Camera, Permissions} from 'expo';
import * as firebase from 'firebase';

export default class PigDataScreen extends React.Component {
    static navigationOptions = ({navigation}) => { 
        return {
            header: (
                <View style={{flex: 0.15, flexDirection: 'column'}}>
                    <View style={{backgroundColor: '#aaa7a2', flex: 1}} />  
                    <Header  outerContainerStyles= {{flex: 1, backgroundColor :"#3f3a38", borderBottomWidth: 0}} 
                        leftComponent={{ icon: 'arrow-back', color: '#f9f8f6', size: 30, onPress: ()=>{ navigation.goBack()}}}                         
                        centerComponent={{ text: 'YOUR PIG PROFILE', style: styles.header}}                   
                        innerContainerStyles= {{alignItems: "center"}}
                    /> 
                </View>
            )            
        }       
    };
   
    confirmData = (pigId, pigImage, pigName, pigDOB, pigGender, pigBreed) => {
        firebase.database().ref('pigs/' + pigId).set({
            pigName: params.pigName,
            pigDOB: params.birthday,
            pigGender: params.gender,
            pigBreed: params.breed
        })
    }
    
    render(){
        const {navigate} = this.props.navigation; 
        const {params} = this.props.navigation.state;
        return(
            <View style={styles.container}>
                <View style={{flex: 0.25, alignItems:"center", marginTop: 10}}>
                    <Avatar width={120} rounded source={{uri: params.image}}/>                                                       
                </View>                 
                <View style={styles.textBox}>
                    <View style={{flexDirection: "column", marginLeft: 20}}>
                        <Text style={styles.text}>Pig Name:</Text>
                        <Text style={styles.text}>DOB: </Text>
                        <Text style={styles.text}>Gender: </Text>
                        <Text style={styles.text}>Breed: </Text>                       
                    </View>
                    <View style={{flexDirection: "column", marginLeft: 20}}>
                        <Text style={styles.textParam}>{params.pigName}</Text>
                        <Text style={styles.textParam}>{params.birthday}</Text>
                        <Text style={styles.textParam}>{params.gender}</Text>
                        <Text style={styles.textParam}>{params.breed}</Text>
                    </View>                    
                </View>
                <View style={{flex: 0.3, justifyContent: "space-around", flexDirection:"row", alignItems: "center"}}>
                    <Button title="EDIT" buttonStyle={styles.button} textStyle={styles.buttonText} onPress={() => navigate('Pigprofile')}/>
                    <Button title="CLOSE" buttonStyle={styles.button} textStyle={styles.buttonText} onPress={                        
                        (pigImage, pigName, pigDOB, pigGender, pigBreed) => {
                            const rootRef = firebase.database().ref(); 
                            const pigsListRef = rootRef.child('pigs_list/');                                                       
                            pigsListRef.child(params.pigName).set({                                                            
                                pigImage: params.image,
                                pigName: params.pigName,
                                pigDOB: params.birthday,
                                pigGender: params.gender,
                                pigBreed: params.breed
                            });                           
                            navigate('Dailycare');
                        }
                    }/>
                </View>                     
            </View>
        );
    }
}

const styles = StyleSheet.create({
    header: {
        color: '#f9f8f6', 
        fontWeight: "500", 
        fontSize: 24,
        fontFamily: 'open-sans-semi-bold',
        fontWeight: "400"
    },
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: "#5e5553",
        alignItems: "center"
    },
    textBox: {
        flex: 0.3, 
        alignItems: "flex-start", 
        marginTop: 50, 
        backgroundColor: "#d7b787",
        width: "90%",
        borderRadius: 10,        
        padding: 20,
        flexDirection: "row",        
    },
    text: {
        color: "#763300",
        fontFamily: 'raleway-semi-bold',
        fontWeight: "400",
        fontSize: 18,
        marginBottom: 15,
    },
    textParam: {
        color: "#f9f8f6",
        fontFamily: 'raleway-semi-bold',
        fontWeight: "400",
        fontSize: 18,
        marginBottom: 15,        
    },
    button: {
        backgroundColor: "#d7b787", 
        width: 100, 
        height: 40, 
        borderRadius: 20
    },
    buttonText: {
        fontFamily: 'raleway-semi-bold', 
        fontWeight: "400",
        fontSize: 16  
    }
});