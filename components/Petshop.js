import React, { Component } from 'react';
import { StyleSheet, Text, TextInput ,View, StatusBar, Image, TouchableHighlight, Alert, Dimensions } from 'react-native';
import {Header, Icon, Card, Avatar, Button} from 'react-native-elements';
import {MapView, Location, Permissions, Marker} from 'expo';

let {height, width} = Dimensions.get('window');

export default class PetshopScreen extends Component {
    static navigationOptions = ({navigation}) => { 
        return {
            header: (
             <View style={{flex: 0.15, flexDirection: 'column'}}>
                <View style={{backgroundColor: '#aaa7a2', flex: 1}} />  
                <Header  outerContainerStyles= {{flex: 1, backgroundColor :"#1e130b", borderBottomWidth: 0}} 
                    leftComponent={{ icon: 'arrow-back', color: '#f9f8f6', size: 30, onPress: ()=>{ navigation.goBack()}}}                         
                    centerComponent={{ text: 'PETSHOP', style: styles.header}}                   
                    innerContainerStyles= {{alignItems: "center"}}
                /> 
             </View>
            )            
        }       
    };
    
    constructor(props){
        super(props);
        this.state = {
            inputAddress: '',
            region: {
                latitude: 60.200690,
                longitude: 24.934302,
                latitudeDelta: 0.322,
                longitudeDelta: 0.056
            },
            markers: [] 
        }
    };
    
    showNearby = async() => {
        try{
          const responseAddress = await fetch( 'https://maps.googleapis.com/maps/api/geocode/json?address=' + this.state.inputAddress + "&key=AIzaSyCts3LWKvqoextOCtk1BYX8dXF7Jei-jsY"); 
          const responseAddressJson = await responseAddress.json();
          let lati = responseAddressJson.results[0].geometry.location.lat;
          let longi = responseAddressJson.results[0].geometry.location.lng;
          this.setState({
            region: {
              latitude: lati,
              longitude: longi,
              latitudeDelta: 0.0522,
              longitudeDelta: 0.0321
            }
          })
            const responseNearby = await fetch("https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=" + lati + "," + 
              longi + "&radius=20000&type=pet_store&key=AIzaSyCts3LWKvqoextOCtk1BYX8dXF7Jei-jsY");
            const responseNearbyJson = await responseNearby.json();
            this.setState({
              markers: responseNearbyJson.results
            });
        }
        catch(error){
          Alert.alert("Please type a place");
        }
      }
    
      onRegionChange(region) {
        console.log('onRegionChange', region);
      }

    render() {
        const {navigate} = this.props.navigation    
        return (
            <View style={styles.container}>
                <View style={styles.subcontainer}>
                    <TextInput placeholder="Type a place" style={styles.input} value={this.state.inputAddress} onChangeText={(inputAddress) => this.setState({inputAddress})}/>
                    <Button title="Search" 
                    buttonStyle={{backgroundColor:"#d7b787", borderRadius: 10, padding: 7}}
                    textStyle={{color: "#f9f8f6", fontFamily: 'raleway-semi-bold', fontWeight: "400", fontSize: 18}} 
                    onPress={this.showNearby}/>
                </View>
                <MapView          
                    style={styles.map}
                    region={{
                        latitude: this.state.region.latitude,
                        longitude: this.state.region.longitude,
                        latitudeDelta: this.state.region.latitudeDelta,
                        longitudeDelta: this.state.region.longitudeDelta
                    }}
                    onRegionChange={this.onRegionChange}
                    onRegionChangeComplete={(region)=>this.setState({region})}
                    >
                    {this.state.markers.map((marker) => (
                    <MapView.Marker key={marker["place_id"]}
                    coordinate={{
                        latitude: marker.geometry.location.lat,
                        longitude: marker.geometry.location.lng
                    }}
                    title={marker.name}
                    description={marker.vicinity}
                    image={require('../assets/shop_marker.png')}
                    />
                          
                    ))}         
                </MapView>            
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
      flexDirection: 'column',
      backgroundColor: "#5e5553"  
    },
    map: {
        flex: 0.9,
        width,
        height
      },
      subcontainer: {
        flex: 0.1, 
        flexDirection:"row", 
        justifyContent: "center", 
        alignItems: 'center',
        paddingLeft: 15,
        paddingBottom: 5,
        paddingTop: 5
      },
      input: {
        width: 260,
        height: 35,
        borderRadius: 10,
        padding: 5,
        fontSize: 20,
        backgroundColor:"#f9f8f6",
        color: "#5e5553" 
      }
})