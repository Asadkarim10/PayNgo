import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Dimensions } from 'react-native';
import { Button } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import { Card, RadioButton } from 'react-native-paper';

const windowHeight = Dimensions.get('window').height;
const CommonColor = '#b3a14b'

const Thanks = () => {

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.Headertext}>
                Thank you for choosing us
            </Text>
            <Text style={{ textAlign: 'center' }}>We will see you on appointment day</Text>
            <Text style={[styles.Headertext, { fontSize: 18 }]}>
                Appointment Summary
            </Text>
            <Card style={{ margin: 10, padding: 20,borderWidth:0.3,borderColor:CommonColor }}>
                <View style={{ flexDirection: 'row', marginVertical: 10 }}>
                    <Text style={{ flex: 1, color: 'grey' }}>Time</Text>
                    <Text>03:00 PM ,18 Nov 2019</Text>
                </View>
                <View style={{ flexDirection: 'row', marginVertical: 10 }}>
                    <Text style={{ flex: 1, color: 'grey' }}>Service</Text>
                    <Text>Hair color and SPA</Text>
                </View>
                <View style={{ flexDirection: 'row', marginVertical: 10 }}>
                    <Text style={{ flex: 1, color: 'grey' }}>Barber Name</Text>
                    <Text>John Nick</Text>
                </View>
                <View style={{ flexDirection: 'row', marginVertical: 10 }}>
                    <Text style={{ flex: 1, color: 'grey' }}>Payment</Text>
                    <Text>74.00</Text>
                </View>
            </Card>
            <Button
                title="Done"
                buttonStyle={{backgroundColor:CommonColor}}
                containerStyle={{marginHorizontal:10,marginTop:15}}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1, marginHorizontal: 5, backgroundColor: 'white'
    },
    Headertext: {
        fontSize: 26, color: 'black', marginLeft: '5%',
        marginTop: windowHeight / 100, marginBottom: 10
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    },
    avatarcontainer: {
        alignSelf: 'center', marginTop: 10
    },
    TrendingText: {
        fontSize: 14, paddingTop: 5, textAlign: 'center'
    }
});

export default Thanks;