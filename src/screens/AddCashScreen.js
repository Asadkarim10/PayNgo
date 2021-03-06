import React, { Component } from 'react';
import { Text } from 'react-native';
import { Provider, TextInput } from  'react-native-paper';
import {  View, TouchableOpacity,   } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { SafeAreaView, StyleSheet } from  'react-native';

class AddCashScreen extends Component {
  render() {
    return (
        <View style = {{
            flex:1
        }}>

            <View style = {{
                flex:2,
                justifyContent:"center"
            }}>
      
        <View style = {{
            height:50,
            alignItems:'center',
            flexDirection:'row',
            justifyContent:'center'
        }}>
            <Text style = {{
                fontSize:30,
                color:"#0150E3",
                fontWeight:"bold"
            }}>Transfer Of Funds</Text>
        </View>
        </View>

        <View style = {{
            flex:8,
            justifyContent:'center'
            
        }}>

        <TouchableOpacity style = {{
            borderColor:"#0150E3",
            borderWidth:1,
                shadowColor: "#0150E3",
                marginTop: 20,
                flexDirection:'row',
                alignItems:"center",
                justifyContent:'center',
                alignSelf: 'center',
                shadowOffset: {
                    width: 0,
                    height: 2,
                },
                shadowOpacity: 2.25,
                shadowRadius: 5.84,
        
                elevation: 20,
                backgroundColor: 'white',
                height: 80,
                justifyContent: 'center',
                width: wp("96%"),
                borderRadius: 10
            
        }} >
        <View>
        <Text style = {{
            fontWeight:'600',
            fontSize:30,
            color:'#0150E3'
        }}>Card</Text>
        </View>
        </TouchableOpacity>

        <TouchableOpacity style = {{
            borderColor:"#0150E3",
            borderWidth:1,
            shadowColor: "#0150E3",
            marginTop: 50,
            flexDirection:'row',
            alignItems:"center",
            justifyContent:'center',
            alignSelf: 'center',
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 2.25,
            shadowRadius: 5.84,
    
            elevation: 20,
            backgroundColor: 'white',
            height: 80,
            justifyContent: 'center',
            width: wp("96%"),
            borderRadius: 10
        
    }}>
        <View >
        <Text style = {{
            fontWeight:'600',
            fontSize:30,
            color:'#0150E3'
        }} >Bank</Text>
        </View>
        </TouchableOpacity>


        </View>


      </View>
    );
  }
}

export default AddCashScreen;