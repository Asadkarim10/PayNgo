import React from 'react';
import { SafeAreaView, View, StyleSheet, Text, StatusBar, Dimensions, Image } from 'react-native';
import { ListItem, Avatar, Icon, Button } from 'react-native-elements';
const windowHeight = Dimensions.get('window').height;


const History = () => {

    return (
        <SafeAreaView style={styles.container}>
            <Text>History</Text>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1, justifyContent:'center',alignItems:'center', backgroundColor: 'white'
    }
});

export default History;