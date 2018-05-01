import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar, Image, TouchableOpacity, TouchableHighlight, Alert, FlatList} from 'react-native';
import {Header, Icon, Card, Avatar, Button} from 'react-native-elements';
import Modal from "react-native-modal";

export default class FoodScreen extends Component {
    constructor(props){
        super(props);
        this.state={
            isModalHighVisible: false,
            isModalLowVisible: false, 
            highVitaminC: [
                {key: 'Alfalfa/Timothy based pellets'},
                {key: 'Parsley'},
                {key: 'Coriander/Cilantro'},
                {key: 'Celery leaves'},
                {key: 'Collard greens'},
                {key: 'Mustard greens '},
                {key: 'Water Cress'},
                {key: 'Garden Cress'},
                {key: 'Swiss Chard'},
                {key: 'Beet greens'},
                {key: 'Spinach '},
                {key: 'Carrot leaves'},
                {key: 'Pea shoots'},
                {key: 'Dandelion greens'},
                {key: 'Grass'},
                {key: 'Kale'},
                {key: 'Broccoli'},
                {key: 'Rapini'},
                {key: 'Cauliflower'},
                {key: 'Brussels Sprouts'},
                {key: 'Savoy'},
                {key: 'Kohlrabi leaves'},
            ],
            lowVitaminC: [
                {key: 'Romaine Lettuce'},
                {key: 'Lettuces - red, green, butter, Boston and other (avoid iceberg)'},
                {key: 'Arugula / Rocket / Roquette / Rucola'},
                {key: 'Endives'},
                {key: 'Radicchio / Italian Chicory'},
                {key: 'Artichoke'},
                {key: 'Asparagus'},
                {key: 'Anise'},
                {key: 'Basil'},
                {key: 'Dill'},
                {key: 'Mint'},
                {key: 'Thyme'},
                {key: 'Celery stalks, Roots'},
                {key: 'Corn strings, leaves & stalks'},
                {key: 'Bean Sprouts'},
                {key: 'String Beans'},
                {key: 'Carrots'},
                {key: 'Beets'},
                {key: 'Kohlrabi bulbs'},
                {key: 'Radishes'},
                {key: 'Turnip'},
                {key: 'Parsnip'},
                {key: 'Raw Beetroot'},
                {key: 'Rutabaga'},
                {key: 'Parsley root'},
                {key: 'Cucumber'},
                {key: 'Squash'},
                {key: 'Zucchini'},
                {key: 'Pumpkin and marrows'}
            ]
        };
    }

    static navigationOptions = ({navigation}) => { 
        return {
            header: (
             <View style={{flex: 0.15, flexDirection: 'column'}}>
                <View style={{backgroundColor: '#aaa7a2', flex: 1}} />  
                <Header  outerContainerStyles= {{flex: 1, backgroundColor :"#3f3a38", borderBottomWidth: 0}} 
                    leftComponent={{ icon: 'arrow-back', color: '#f9f8f6', size: 30, onPress: ()=>{ navigation.goBack()}}}                         
                    centerComponent={{ text: 'FOOD & NUTRITION', style: styles.header}}                   
                    innerContainerStyles= {{alignItems: "center"}}
                /> 
             </View>
            )            
        }       
    };
    //Toggle Modal
    toggleModalHigh = () =>
    this.setState({ isModalHighVisible: !this.state.isModalHighVisible });

    toggleModalLow = () =>
    this.setState({ isModalLowVisible: !this.state.isModalLowVisible });

    //flatlist header
    flatlistHeader = () => (
        <View style={{justifyContent: "center", alignItems: "center", backgroundColor: "#763300", width: "100%", height: 40,borderTopLeftRadius: 10, borderTopRightRadius: 10, }}>
            <Text style={styles.flatlistHeadline}>High Vitaminc C food </Text>
        </View>
    );
    //flatlist item separator
    FlatListItemSeparator = () => {
        return (
          <View
            style={{
              height: 1,
              width: "80%",
              backgroundColor: "#d7b787",
              marginLeft: 10,
            }}
          />
        );
      }
    render() {
        const {navigate} = this.props.navigation;        
        return (
            <View style={styles.container}>
                <Card
                    title='Recommended ratio of food'
                    titleStyle = {{fontFamily: 'raleway-semi-bold', fontWeight: "400", fontSize: 16, color: "#763300", textAlignVertical: "bottom" }}
                    containerStyle = {{backgroundColor: "#f9f8f6", width: 310, marginBottom: 40}}                    
                >
                    <View style={{flexDirection: "row"}}>
                        <Icon name="check" color = "#479600" size={20}/>
                        <Text style={styles.text}>80% or more hay</Text>
                    </View>
                    <View style={{flexDirection: "row"}}>
                        <Icon name="check" color = "#479600" size={20}/>
                        <Text style={styles.text}>10-15% veg and fresh herbs (1 cupful / 50g / nearly 2oz)</Text>
                    </View>
                    <View style={{flexDirection: "row"}}>
                        <Icon name="check" color = "#479600" size={20}/>
                        <Text style={styles.text}>5-10% pellets (depending on the age)</Text>
                    </View>
                    <View style={{flexDirection: "row"}}>
                        <Icon name="check" color = "#479600" size={20}/>
                        <Text style={styles.text}>Plenty of fresh water daily</Text>
                    </View>
                    <View style={{flexDirection: "row"}}>
                        <Icon name="check" color = "#479600" size={20}/>
                        <Text style={styles.text}>Vitamin C</Text>
                    </View>      
                </Card>                
                <TouchableOpacity  onPress={this.toggleModalHigh} style={styles.button}>
                    <Text style={styles.headline}>High Vitamin C food</Text>                   
                </TouchableOpacity>
                <TouchableOpacity  onPress={this.toggleModalLow} style={styles.button}>
                    <Text style={styles.headline}>Low Vitamin C food</Text>                   
                </TouchableOpacity>
                <TouchableOpacity  onPress={this.toggleModal} style={styles.button}>
                    <Text style={styles.headline}>Not Recommended food</Text>                   
                </TouchableOpacity>
                <Modal 
                    animationType="slide" 
                    isVisible={this.state.isModalHighVisible} 
                    backdropColor="#763300" backdropOpacity={0}
                    onRequestClose={() => {
                    this.setState({isModalHighVisible: false});
                    }}>
                    <View style={{flex: 1}}>
                        <View style={styles.modal}>                                                   
                            <View style={{flex: 0.9, width: "100%"}}>
                                <FlatList data={this.state.highVitaminC}
                                    ListHeaderComponent = {this.flatlistHeader}
                                    stickyHeaderIndices={[0]}
                                    ItemSeparatorComponent = {this.FlatListItemSeparator}
                                    renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
                                />                   
                            </View>
                            <View style={{justifyContent: "center", flex: 0.1}}>
                                <TouchableOpacity onPress={this.toggleModalHigh} style={styles.closeModal}>
                                    <Text style={{color: "#d7b787"}}>CLOSE</Text>
                                </TouchableOpacity>
                            </View>  
                        </View>                        
                    </View>
                </Modal>
                <Modal 
                    animationType="slide" 
                    isVisible={this.state.isModalLowVisible} 
                    backdropColor="#763300" backdropOpacity={0}
                    onRequestClose={() => {
                    this.setState({isModalLowVisible: false});
                    }}>
                    <View style={{flex: 1}}>
                        <View style={styles.modal}>                                                   
                            <View style={{flex: 0.9, width: "100%"}}>
                                <FlatList data={this.state.lowVitaminC}
                                    ListHeaderComponent = {this.flatlistHeader}
                                    stickyHeaderIndices={[0]}
                                    ItemSeparatorComponent = {this.FlatListItemSeparator}
                                    renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
                                />                   
                            </View>
                            <View style={{justifyContent: "center", flex: 0.1}}>
                                <TouchableOpacity onPress={this.toggleModalLow} style={styles.closeModal}>
                                    <Text style={{color: "#d7b787"}}>CLOSE</Text>
                                </TouchableOpacity>
                            </View>  
                        </View>                        
                    </View>
                </Modal>
            </View>
        )
    }
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: "#5e5553",
      alignItems: "center"  
    },
    header: {
        color: '#f9f8f6', 
        fontWeight: "500", 
        fontSize: 24,
        fontFamily: 'open-sans-semi-bold',
        fontWeight: "400"
    },
    text: {
        fontFamily: 'raleway-medium', 
        fontWeight: "200",
        color: "#5e5553",
        marginLeft: 5       
    },
    button: {
        backgroundColor: "#f9f8f6", 
        borderRadius: 20, 
        width: 220, 
        padding: 10,
        alignItems: "center",
        marginBottom: 20   
    },
    buttonText: {
        color: "#763300", 
        fontFamily: 'raleway-semi-bold', 
        fontWeight: "400",
        fontSize: 16,
        marginTop: 15
    },
    modal: {
        width: 320, 
        height: 400, 
        backgroundColor: "#f9f8f6",
        marginTop: 50,
        borderRadius: 10,        
        padding: 0,
        alignItems: "center",
        
    },
    headline:{
        color: "#763300", 
        fontFamily: 'raleway-semi-bold',
        fontWeight: "400",
        fontSize: 16
    },    
    closeModal: {
        backgroundColor: "#763300",
        borderRadius: 20,
        width: 60,
        padding: 5,
        alignItems: "center",

    },
    flatlistHeadline: {
        color: "#f9f8f6", 
        fontFamily: 'raleway-semi-bold',
        fontWeight: "400",
        fontSize: 16
    },
    item: {
        padding: 10,
        marginLeft: 10,
        height: 40,
        color: "#5e5553",
        fontSize: 14,       
        borderTopLeftRadius: 10, 
        borderTopRightRadius: 10
      },

});