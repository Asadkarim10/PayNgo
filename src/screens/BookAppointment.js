import React from 'react';
import { SafeAreaView, View, StyleSheet, Text, FlatList, Dimensions, Image, TextInput } from 'react-native';


const windowHeight = Dimensions.get('window').height;

const Loans = ({ navigation }) => {
   
    return (
        <SafeAreaView style={styles.container}>
            <Text>Loans</Text>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,justifyContent:'center',alignItems:'center', backgroundColor: 'white'
    },
    
});

export default Loans;