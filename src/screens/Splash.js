import React from 'react';
import { SafeAreaView, View, StyleSheet, Text, StatusBar, Dimensions, Image } from 'react-native';
const windowHeight = Dimensions.get('window').height;


const Splash = () => {

    return (
        <SafeAreaView style={styles.container}>
            {/* <Image style={styles.avatar} source={{ uri: 'https://i.pinimg.com/originals/0c/3b/3a/0c3b3adb1a7530892e55ef36d3be6cb8.png' }} /> */}
           
            <Text style={styles.title}>Pay&GO</Text>
           
            
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1, backgroundColor: 'white',justifyContent:'center',alignItems:'center'
    },
    title: {
        color: '#3a55de', textAlign: 'center', fontSize: 40, fontWeight: 'bold'
    }
});

export default Splash;