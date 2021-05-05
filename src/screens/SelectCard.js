// // import React, { useState } from 'react';
// // import { Text, View, TouchableOpacity, StyleSheet,  } from 'react-native';
// // import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
// // import Icon from 'react-native-vector-icons/FontAwesome';
// // import Entypo from 'react-native-vector-icons/Entypo';
// // import Ionicons from 'react-native-vector-icons/Ionicons';


// // import DropDownPicker from 'react-native-dropdown-picker';
// // import { TextInput } from 'react-native';

// // export default function SelectWallet() {
// //   const [open, setOpen] = useState(false);
// //   const [value, setValue] = useState(null);
// //   const [items, setItems] = useState([
// //     {label: 'wallet', value: 'wallet'},
// //     {label: 'Banana', value: 'banana'}
// //   ]);

// //   return (
// //       <View style = {{
// //           flex:1,
// //           justifyContent:'center'
// //       }}>
// //     <DropDownPicker
// //       open={open}
// //       style = {{
// //           width:wp('96%'),
// //           alignSelf:'center',
// //           borderColor:'#0150E3',
// //           borderWidth:2,
// //           zIndex:10,
// //           elevation:20
// //       }}
// //       value={value}
// //       labelProps={{
// //         numberOfLines: 1,
// //       }}
// //       labelStyle={{
// //         fontWeight: "bold",
// //         elevation:20
// //       }}
    
// //       items={items}
// //       setValue={setValue}
// //       setItems={setItems}
// //       setOpen={setOpen}
// //     />

// // {/* <DropDownPicker
// //       open={open}
// //       style = {{
// //         width:wp('96%'),
// //         elevation:20,

// //         alignSelf:'center',
// //         marginTop:20,
// //         borderWidth:2,
// //         borderColor:'#0150E3'
// //     }}
// //       value={value}
// //       items={items}
// //      // setValue={setValue}
// //      // setItems={setItems}
// //       //setOpen={setOpen}
// //     /> */}

// // <TextInput style = {{
// //     marginTop:20,
// //     width:wp("98%"),
// //     alignSelf:'center',
// //     height:300,
// //     zIndex:10,
// //     elevation:20,
// //     textAlign:'center',
// //     backgroundColor:'#c4c4c4'
// // }}
// // placeholder="Enter Information About Transfer"
// // />

// // <View style = {{
// //     height:130,
// //     justifyContent:'center',
// //     alignItems:'center'
// // }}>
// // <TouchableOpacity style = {{
// //     height:50,
// //     elevation:20,
// //     marginTop:20,
// //     backgroundColor:'white',
// //     justifyContent:'center',
// //     alignSelf:'center',
// //     width:wp("80"),
// //     borderRadius:20,
// //     borderColor:'#0150E3',
// //     borderWidth:2
// // }}>
// // <View >
// //    <Text style = {{
// //        textAlign:'center',
// //        fontWeight:"500",
// //        fontSize:20,
// //        color:"#0150E3"
// //    }}> Proceed </Text>
// // </View>
// // </TouchableOpacity>
// // </View>

// //     </View>
// //   );
// // }


// // const styles = StyleSheet.create({
// //     card: {
// //         shadowColor: "#000",
// //         marginTop: 20,
// //         alignSelf: 'center',
// //         shadowOffset: {
// //             width: 0,
// //             height: 2,
// //         },
// //         shadowOpacity: 2.25,
// //         shadowRadius: 5.84,

// //         elevation: 20,
// //         backgroundColor: 'white',
// //         height: 160,
// //         justifyContent: 'center',
// //         width: wp("94%"),
// //         borderRadius: 10
// //     },

// //     insideCard: {
// //         flexDirection: 'row',
// //         alignContent: 'center',
// //         alignItems: 'center',
// //         justifyContent: 'space-around'
// //     },
// //     Text: {
// //         fontSize: 33,
// //         fontWeight: '300',
// //         color: '#0150E3'
// //     },
    
// // });




import { Provider, TextInput } from  'react-native-paper';
import { Text, View, TouchableOpacity,   } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import  React, { useState } from  'react';

import { SafeAreaView, StyleSheet } from  'react-native';

  

import  DropDown  from  'react-native-paper-dropdown';

  

function  SelectCard() {

const [showDropDown, setShowDropDown] = useState(false);

const [Card, setCard] = useState();

  

const  SelectCard = [

{ label:  'Master', value:  'Master' },

{ label:  'Visa', value:  'Visa' },

{ label:  'Others', value:  'others' },

];

  

return (

<Provider>

<SafeAreaView  style={styles.containerStyle}>

<DropDown

style = {{ marginTop:20,
             borderWidth:2,
             backgroundColor:"yellow",
         borderColor:'#0150E3' }}

label={'Select Card' }

mode={'outlined'}

value={Card}

setValue={setCard}

list={SelectCard}

style = {{
   
}}

visible={showDropDown}

showDropDown={() =>  setShowDropDown(true)}

onDismiss={() =>  setShowDropDown(false)}

inputProps={{

right:  <TextInput.Icon  name={'menu-down'}  />,

}}

/>

 <TextInput style = {{
    marginTop:20,
    width:wp("92%"),
    alignSelf:'center',
    height:300,
    zIndex:10,
    elevation:20,
    textAlign:'center',
    backgroundColor:'#c4c4c4'
}}
placeholder="Enter Information About Transfer"
/>

<View style = {{
    height:130,
    justifyContent:'center',
    alignItems:'center'
}}>
<TouchableOpacity style = {{
    height:50,
    elevation:20,
    marginTop:20,
    backgroundColor:'white',
    justifyContent:'center',
    alignSelf:'center',
    width:wp("80"),
    borderRadius:20,
    borderColor:'#0150E3',
    borderWidth:2
}}>
<View >
   <Text style = {{
       textAlign:'center',
       fontWeight:"500",
       fontSize:20,
       color:"#0150E3"
   }}> Proceed </Text>
</View>
</TouchableOpacity>
</View>

</SafeAreaView>

</Provider>

);

}

  

const  styles = StyleSheet.create({

containerStyle: {

flex:  1,

marginHorizontal:  20,
justifyContent:  'center',

},

});

  

export  default  SelectCard;

 

 



