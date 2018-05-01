import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar, Image, TouchableHighlight, Alert, Button, ScrollView, FlatList} from 'react-native';
import {Header, Icon, Card, Avatar} from 'react-native-elements';
import BottomToolbar from 'react-native-bottom-toolbar';
import * as firebase from 'firebase';


export default class DailycareScreen extends React.Component {
    static navigationOptions = ({navigation}) => { 
        return {
            header: (
                <View style={{flex: 0.15, flexDirection: 'column'}}>
                    <View style={{backgroundColor: '#aaa7a2', flex: 1}} />  
                    <Header  outerContainerStyles= {{flex: 1, backgroundColor :"#3f3a38", borderBottomWidth: 0}} 
                        leftComponent={{ icon: 'arrow-back', color: '#f9f8f6', size: 30, onPress: ()=>{navigation.navigate('Home')}}}                         
                        centerComponent={{ text: 'MY PIG', style: styles.header}}                   
                        innerContainerStyles= {{alignItems: "center"}}
                    /> 
                </View>
            )            
        }       
    };
    constructor(props){
        super(props);
        this.state={piggies: []}
    }
    
    componentDidMount = () => {
        this.getItems();        
    }

    getItems = () => {        
            const pigs = [];        
            firebase.database().ref('pigs_list/').on('value', (data) => {
                data.forEach((child) => {
                pigs.push({
                        key: child.val().pigName,
                        pigImage: child.val().pigImage,
                        pigName: child.val().pigName,
                        pigDOB: child.val().pigDOB,
                        pigGender: child.val().pigGender,
                        pigBreed: child.val().pigBreed
                    }); 
                });
                this.setState({piggies: pigs});
                console.log(this.state.piggies);
            })
           
    } 
    
    renderItem = ({item}) => 
        <View style={{marginBottom: 20, alignItems: "center", width: 100, justifyContent: "center"}}>
            <Avatar avatarStyle={{borderWidth: 2, borderColor: "#f9f8f6"}} width={100} rounded source={{uri: item.pigImage}}
                onLongPress={() => this.deleteItem(item.pigName)}
            />
            <Text style={styles.textButton}>{item.pigName}</Text>   
        </View>;  
    
    deleteItem = (data) => {
        Alert.alert('Do you want to delete your piggy?');
        firebase.database().ref('pigs_list/').child(data).remove();
        let piggiesList = [...this.state.piggies];
        let index = piggiesList.indexOf(data);
        piggiesList.splice(index, 1);
        this.setState({piggies: piggiesList});
    }
    
    render(){
        const {navigate} = this.props.navigation;        
        return (
            <View style={styles.container}>                
                <View style={{flex: 0.85, alignItems: "center"}}>
                    <ScrollView style={{paddingTop: 20}}>                 
                        <FlatList
                            data={this.state.piggies}
                            renderItem = {this.renderItem}
                            keyExtractor = {this.keyExtractor}                           
                        />
                    </ScrollView>         
                </View>                
                <View style={styles.bottom}>
                        <Icon name="add-circle" color="#f9f8f6" size={70} onPress={() => navigate('Pigprofile')}/>
                        <Text style={styles.textButton}>New Pig</Text>   
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
      flexDirection: "column",
      backgroundColor: "#5e5553"   
    },
    subHeader: {
        width: "100%", 
        padding: 10, 
        alignItems:"center", 
        justifyContent:"center",
        backgroundColor: "#1e130b"
    },
    subHeaderTitle: {
        color: "#f9f8f6", 
        fontFamily: 'raleway-semi-bold', 
        fontWeight: "400", 
        fontSize: 18
    },
    button: {
        flex: 0.85,
        marginTop: 20, 
        borderWidth: 1,
        flexDirection: "column"
    },
    textButton: {
        color: "#f9f8f6", 
        fontFamily: 'raleway-medium', 
        fontWeight: "200", 
        fontSize: 20
    }, 
    bottom: {
        flex: 0.15, 
        alignItems:"center", 
        justifyContent: "center", 
        flexDirection: "row",
        backgroundColor: '#3f3a38',
    }
});