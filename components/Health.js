import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar, Image, TouchableHighlight, Alert, Button, ScrollView} from 'react-native';
import {Header, Icon, Card, Avatar} from 'react-native-elements';
import Collapsible from 'react-native-collapsible';
import Accordion from 'react-native-collapsible/Accordion';
import * as Animatable from 'react-native-animatable';

//left columns 
const section = [
    {
      title: 'Eyes',
      image: require('../assets/pig_eyes.jpg'),
      content:       
        'Eyes should be clear and open fully. You may notice a white, milky substance at the corner of their eyes. This is normal; it’s a product of their grooming process that is wiped away by their front feet.\n \nIf you see discolored liquid, clear discharge, or persistent eye “crust”, this can indicate an underlying health problem. Schedule a vet appointment immediately if you notice watery or “crusty” eyes.'      
    },
    {
        title: 'Ears',
        image: require('../assets/pig_ears.jpg'),
        content: 'Ears should be clean and smooth. If you are cleaning your guinea pig’s ears regularly, you should not notice an excess build-up of wax. If you do see an excessive amount of wax build-up after cleaning regularly, consult your vet.\n\n Black dots or other unusual markings can be the signs of fungal or parasitic infection. Consult a vet if you notice these abnormalities. Don’t forget to check behind the ears as well!'
    } ,
    {
        title: 'Mouth',
        image: require('../assets/pig_mouth.gif'),
        content: 'The mouth should be clean from sores or crusty build-up. Take note of teeth growth. Indications of overgrown incisors can indicate that your guinea pig has stopped eating, which can signify an underlying health condition.\n\n Agled wear on the incisors can be a sign that your guinea pig is favoring one side of the mouth while chewing. This can indicate scurvy, an abscess or another health issue.'
    } ,
    {
        title: 'Feet',
        image: require('../assets/pig_feet.jpg'),
        content: 'Feet should be free from sores; when you touch the pads, your guinea pig should not react in pain. Sores on feet can indicate that your guinea pig’s bedding is wet and needs cleaned more often.\n\nCommon causes for feet stores include overweight guinea pigs, guinea pigs that sit a lot due to advanced age or arthritis. Scurvy (a lack of Vitamin C) causes weak skin and can contribute to the formation of foot sores. If your guinea pig has sores on its feet, discuss these possible causes with your vet.'
    },
    {
        title: 'Breathing',
        content: 'Breathing should sound smooth, quiet, consistent and not labored. Labored or irregular breathing can indicate an underlying respiratory condition which requires immediate medical attention.'
    },
    {
        title: 'Genital Areas',
        content: 'The genital areas should be clean and free from calcium deposits, sores or discoloration.'      
      },
      {
          title: 'Water',
          content: 'Water should be replaced daily and the bottle washed thoroughly – no exceptions!\n\nGet familiar with how much water your guinea pig(s) consume(s); every guinea pig is different. Expect to see more water consumed during warmer months.'
      } ,
      {
          title: 'Food',
          content: 'Hay should be refreshed daily (if needed) and should be cheeked to be free from long, hard stems which can get in eyes and noses.'
      } ,
      {
          title: 'Droppings',
          image: require('../assets/pig_poo.jpg'),
          content: 'Droppings should be firm, not runny and pliable (not hard, but not too soft). A guinea pig with runny droppings or one who is not pooping at all should be taken to a vet immediately.'
      },
      {
          title: 'Urine',
          content: 'Normal urine may appear clear or cloudy but should not be gritty in texture. Normal urine may appear “milky.” To determine if urine is gritty, wait until it is dried.\n\nDried urine may leave behind powdery, white calcium compounds. Very young guinea pigs often have an orange or brown tint to their urine. Urine sometimes changes to an orange color as it sits.'
      }  
  ];

export default class HealthScreen extends Component {
    static navigationOptions = ({navigation}) => { 
        return {
            header: (
             <View style={{flex: 0.15, flexDirection: 'column'}}>
                <View style={{backgroundColor: '#aaa7a2', flex: 1}} />  
                <Header  outerContainerStyles= {{flex: 1, backgroundColor :"#1e130b", borderBottomWidth: 0}} 
                    leftComponent={{ icon: 'arrow-back', color: '#f9f8f6', size: 30, onPress: ()=>{ navigation.goBack()}}}                         
                    centerComponent={{ text: 'HEALTH', style: styles.header}}                   
                    innerContainerStyles= {{alignItems: "center"}}
                /> 
             </View>
            )            
        }       
    };
              
        //Header 
        renderHeader(section, index, isActive, sections) {
            return (
            <View style={styles.headerButton}>
                <Text style={styles.title}>{section.title}</Text>
            </View>
            );
        }
       
        //Content 
        renderContent(section, i, isActive, sections) {
            return (
            <Animatable.View 
                duration={300} 
                style={styles.content}>
                <Animatable.Image duration={300} 
                easing="ease-out" 
                animation={isActive ? 'pulse' : false} iterationCount="infinite" style={styles.image} source={section.image}                
                />
                <Animatable.Text duration={300} 
                easing="ease-out" 
                animation={isActive ? 'zoomIn' : false} style={styles.text}>{section.content}</Animatable.Text>
            </Animatable.View>
            );
        }
        
        render() {
            const {navigate} = this.props.navigation    
            return (
                <ScrollView>
                    <View style={styles.container}>                                                                         
                        <Accordion
                            sections={section}                                                                            
                            renderHeader={this.renderHeader}
                            renderContent={this.renderContent}
                        />                        
                    </View>                                                            
                </ScrollView>
            );
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
      flex:1,
      flexDirection: "column",
      backgroundColor: "#5e5553",
      padding: 30 
    },
    headerButton: {
        backgroundColor: "#f9f8f6",
        width: 300, 
        height: 60, 
        padding: 5,
        borderRadius: 10, 
        alignItems: "center", 
        justifyContent: "center",
        marginBottom: 10,        
    },
    title:{
        color: "#763300",
        fontFamily:'raleway-semi-bold',
        fontSize: 18,
        fontWeight: "400",       
    },
    content: {
        width: 300, 
        backgroundColor: "#f9f8f6",
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        padding: 5,
        marginBottom: 5
    },
    image: {
        width: 80, 
        height: 70, 
        borderRadius: 10 
    },
    text: {
        color: "#5e5553",
        fontFamily: 'raleway-medium',
        fontWeight: "200",
        alignItems: 'center',
    }
})