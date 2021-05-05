import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Dimensions } from 'react-native';
import { ListItem, Avatar, Icon, Badge, SearchBar } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
const windowHeight = Dimensions.get('window').height;

const Savings = () => {

    return (
        <SafeAreaView style={styles.container}>
            <Text>Savings</Text>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1, alignItems: 'center', justifyContent: 'center'
    }
});

export default Savings;