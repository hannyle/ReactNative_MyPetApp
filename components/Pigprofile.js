import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View, StatusBar, Image, TouchableHighlight, Alert, ScrollView, TouchableOpacity, Picker, KeyboardAvoidingView} from 'react-native';
import {Header, Icon, Card, Avatar, Button} from 'react-native-elements';
import { ImagePicker, Camera, Permissions} from 'expo';
import DatePicker from 'react-native-datepicker';
import * as firebase from 'firebase';

export default class PigprofileScreen extends React.Component {
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
    state = {
        image: "http://shashgrewal.com/wp-content/uploads/2015/05/default-placeholder-300x300.png",
        pigName: '',        
        gender: '',
        breed: '',
        birthday: "",
        
        //piggies: []
      };
    
    pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
          allowsEditing: true,
          aspect: [3, 3],
        });   
           
        if (!result.cancelled) {
          this.setState({ image: result.uri });
        }
      };

    saveData = () => {
        const {navigate} = this.props.navigation;        
        navigate('PigData', {
            image: this.state.image,
            pigName: this.state.pigName, 
            birthday: this.state.birthday, 
            gender: this.state.gender, 
            breed: this.state.breed}
        );
    }
    
    render(){
        const {navigate} = this.props.navigation; 
        return(
            <KeyboardAvoidingView style={styles.container} behavior="padding">            
            <ScrollView>
                <View style={{flex: 0.25, alignItems:"center", marginTop: 10}}>
                    <Avatar width={120} rounded source={{uri: this.state.image}} onPress={this.pickImage}/>                                                       
                </View> 
                <View style={{flex: 0.6, alignItems: "center", marginTop: 15, justifyContent: "center"}}>
                    <TextInput name="pigName" style={styles.textInput} placeholder="Pig Name" 
                        onChangeText={(pigName)=>this.setState({pigName})} value={this.state.pigName}/>
                    <DatePicker
                        style={{width: 320, height: 50, borderRadius: 10, 
                                backgroundColor:"#f9f8f6",
                                padding: 5,
                                marginBottom: 15,}}
                        date={this.state.birthday}                        
                        format="DD-MM-YYYY"
                        minDate="01-01-2016"
                        maxDate="31-12-2025"
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        placeholder ="Date of birth"
                        customStyles={{
                            dateIcon: {
                                position: 'absolute',
                                left: 0,
                                top: 4,
                                marginLeft: 0
                            },
                            dateInput: {
                                marginLeft: 0,
                                borderColor: "#f9f8f6",
                            },
                            dateText: {
                                fontFamily: 'raleway-medium',
                                fontWeight: "200",
                                fontSize: 16,                                
                                color: "#5e5553" 
                            }, 
                            placeholderText: {
                                fontFamily: 'raleway-medium',
                                fontWeight: "200",
                                fontSize: 16
                            } 
                        }}
                        onDateChange={(birthday) => {this.setState({birthday: birthday})}}
                    />
                  
                    <Picker
                        mode="dropdown"
                        selectedValue={this.state.gender}
                        style={{width: 320, height: 50, marginBottom: 15, backgroundColor: "#f9f8f6", alignItems: "center", color: "#5e5553"}}
                        itemStyle={{fontFamily: 'raleway-medium',
                        fontWeight: "200",
                        fontSize: 16, }}
                        onValueChange={(itemValue, itemIndex) => this.setState({gender: itemValue})}>
                        <Picker.Item label="Gender"/>
                        <Picker.Item label="Male" value="Male" />
                        <Picker.Item label="Female" value="Female" />
                    </Picker>
                    <Picker
                        mode="dropdown"
                        selectedValue={this.state.breed}
                        style={{width: 320, height: 50, marginBottom: 15, backgroundColor: "#f9f8f6", alignItems: "center", color: "#5e5553"}}
                        onValueChange={(itemValue, itemIndex) => this.setState({breed: itemValue})}>
                        <Picker.Item label="Breed"/>
                        <Picker.Item label="Teddy" value="Teddy" />
                        <Picker.Item label="Abyssinian" value="Abyssinian"/>
                        <Picker.Item label="Texel" value="Texel" />
                        <Picker.Item label="Silkie" value="Silkie"/>
                        <Picker.Item label="Hairless" value="Hairless" />
                        <Picker.Item label="Coronet" value="Coronet"/>
                    </Picker>                        
                </View>
                <View style={{flex: 0.15, justifyContent: "space-around", flexDirection:"row", alignItems: "center"}}>
                    <Button title="CANCEL" buttonStyle={styles.button} textStyle={styles.buttonText} onPress={() => navigate('Dailycare')}/>
                    <Button title="SAVE" buttonStyle={styles.button} textStyle={styles.buttonText} onPress={(this.saveData)}/>
                </View>
                </ScrollView>  
            </KeyboardAvoidingView>
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
    },    
    textInput: {
        width: 320, 
        height: 50, 
        borderRadius: 10, 
        backgroundColor:"#f9f8f6",
        padding: 5,
        marginBottom: 15,
        fontFamily: 'raleway-medium',
        fontWeight: "200",
        fontSize: 16,
        textAlign: "center",
        color: "#5e5553"
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
