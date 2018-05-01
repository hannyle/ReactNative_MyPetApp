import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar, Image, TouchableHighlight, Alert, Button} from 'react-native';
import {Header, Icon, Card, Avatar} from 'react-native-elements';
import {Audio} from 'expo';
import { stringify } from 'querystring';



export default class SoundScreen extends Component {
    static navigationOptions = ({navigation}) => { 
        return {
            header: (
             <View style={{flex: 0.15, flexDirection: 'column'}}>
                <View style={{backgroundColor: '#aaa7a2', flex: 1}} />  
                <Header  outerContainerStyles= {{flex: 1, backgroundColor :"#1e130b", borderBottomWidth: 0}} 
                    leftComponent={{ icon: 'arrow-back', color: '#f9f8f6', size: 30, onPress: ()=>{ navigation.goBack()}}}                         
                    centerComponent={{ text: 'SOUNDS', style: styles.header}}                   
                    innerContainerStyles= {{alignItems: "center"}}
                /> 
             </View>
            )            
        }       
    };
   
    constructor(props){
        super(props);
        this.state={
            mute: false,
            isPlayingHappy: false,
            isPlayingCurious: false,
            isPlayingHungry: false,
            isPlayingLonely: false,
            isPlayingAlert: false,
            isPlayingAngry: false,
        }
    }
    componentDidMount = () => {
        this.loadAudio();
    };

    loadAudio = async() => {
        this.soundObjectHappy = new Audio.Sound();
        this.soundObjectCurious = new Audio.Sound();
        this.soundObjectHungry = new Audio.Sound();
        this.soundObjectLonely = new Audio.Sound();
        this.soundObjectAlert = new Audio.Sound();
        this.soundObjectAngry = new Audio.Sound();  
        try {
            await this.soundObjectHappy.loadAsync(require('../assets/sounds/HappyPig.wav'));
            await this.soundObjectCurious.loadAsync(require('../assets/sounds/curious.wav'));
            await this.soundObjectHungry.loadAsync(require('../assets/sounds/Hungry.wav'));
            await this.soundObjectLonely.loadAsync(require('../assets/sounds/lonely.wav'));
            await this.soundObjectAlert.loadAsync(require('../assets/sounds/KeepAway.wav'));
            await this.soundObjectAngry.loadAsync(require('../assets/sounds/angry.wav'));
        } catch (error) {
          console.log(error);
        }
    } 

    toggleHappy = async() => {
        this.setState(
            {isPlayingHappy:!this.state.isPlayingHappy},
            () => (this.state.isPlayingHappy? this.soundObjectHappy.playAsync() : this.soundObjectHappy.stopAsync())
        );                  
    }

    toggleCurious = async() => {
        this.setState(
            {isPlayingCurious:!this.state.isPlayingCurious},
            () => (this.state.isPlayingCurious? this.soundObjectCurious.playAsync() : this.soundObjectCurious.stopAsync())
        );          
    }

    toggleHungry = async() => {
        this.setState(
            {isPlayingHungry:!this.state.isPlayinHungryg},
            () => (this.state.isPlayingHungry? this.soundObjectHungry.playAsync() : this.soundObjectHungry.stopAsync())
        );          
    }

    toggleLonely = async() => {
        this.setState(
            {isPlayingLonely:!this.state.isPlayingLonely},
            () => (this.state.isPlayingLonely? this.soundObjectLonely.playAsync() : this.soundObjectLonely.stopAsync())
        );          
    }

    toggleAlert = async() => {
        this.setState(
            {isPlayingAlert:!this.state.isPlayingAlert},
            () => (this.state.isPlayingAlert? this.soundObjectAlert.playAsync() : this.soundObjectAlert.stopAsync())
        );          
    }

    toggleAngry = async() => {
        this.setState(
            {isPlayingAngry:!this.state.isPlaying},
            () => (this.state.isPlayingAngry? this.soundObjectAngry.playAsync() : this.soundObjectAngry.stopAsync())
        );          
    }

   render() {
        const {navigate} = this.props.navigation    
        return (
            <View style={styles.container}>
                <View style={{flexDirection: "column"}}>
                    <View style={styles.smallBox}>
                        <Icon name={this.state.isPlayingHappy? "pause-circle-filled":"play-circle-filled"} 
                        color="#f9f8f6" size={40} 
                        onPress={this.toggleHappy}
                        />
                        <Text style={styles.text}>Happy Pig</Text>     
                    </View>
                    <View style={styles.smallBox}>
                        <Icon name={this.state.isPlayingCurious? "pause-circle-filled":"play-circle-filled"} 
                        color="#f9f8f6" size={40} 
                        onPress={this.toggleCurious}
                        />
                        <Text style={styles.text}>Curious Pig</Text>     
                    </View>
                    <View style={styles.smallBox}>
                        <Icon name={this.state.isPlayingHungry? "pause-circle-filled":"play-circle-filled"} 
                        color="#f9f8f6" size={40} 
                        onPress={this.toggleHungry}
                        />
                        <Text style={styles.text}>Hungry Pig</Text>     
                    </View>        
                </View>
                <View style={{flexDirection: "column"}}>
                    <View style={styles.smallBox}>
                        <Icon name={this.state.isPlayingLonely? "pause-circle-filled":"play-circle-filled"} 
                        color="#f9f8f6" size={40} 
                        onPress={this.toggleLonely}
                        />
                        <Text style={styles.text}>Lonely Pig</Text>     
                    </View>
                    <View style={styles.smallBox}>
                        <Icon name={this.state.isPlayingAlert? "pause-circle-filled":"play-circle-filled"} 
                        color="#f9f8f6" size={40} 
                        onPress={this.toggleAlert}
                        />
                        <Text style={styles.text}>Alert Pig</Text>     
                    </View>
                    <View style={styles.smallBox}>
                        <Icon name={this.state.isPlayingAngry? "pause-circle-filled":"play-circle-filled"} 
                        color="#f9f8f6" size={40} 
                        onPress={this.toggleAngry}
                        />
                        <Text style={styles.text}>Angry Pig</Text>     
                    </View>        
                </View>                            
            </View>
        )
    }
};

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
      flexDirection: 'row',
      backgroundColor: "#5e5553"  
    },
    smallBox: {
        backgroundColor: "#d7b787", 
        width: 150, flexDirection:"row", 
        alignItems:"center", 
        justifyContent:"center", 
        padding: 5,
        borderRadius: 10,
        marginTop: 30,
        marginLeft: 20
    },
    text: {
        color:"#f9f8f6", 
        fontFamily: 'raleway-semi-bold', 
        fontWeight: "400",
        fontSize: 18   
    }
})