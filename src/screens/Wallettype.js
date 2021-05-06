import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';



class Wallettype extends Component {
    render() {
        return (
            <View>
                <View style={{
                    height: 100,
                    marginLeft: 10,
                    justifyContent: 'center'
                }}>
                    <Text style={{
                        fontWeight: '600',
                        fontSize: 35,
                        marginLeft: 5,
                        color: '#0150E3'
                    }}>Add Cash</Text>
                </View>

                <TouchableOpacity onPress={() => this.props.navigation.navigate('SelectWallet')} >
                    <View style={styles.card}>
                        <View style={styles.insideCard}>
                            <Entypo name="wallet" size={70} color="#0150E3" />
                            <Text style={styles.Text}>Wallet</Text>

                        </View>

                    </View>
                </TouchableOpacity>

                <TouchableOpacity>

                    <View style={styles.card}>
                        <View style={styles.insideCard}>
                            <Ionicons name="cash" size={70} color="#0150E3" />

                            <Text style={styles.Text}>Cash</Text>

                        </View>

                    </View>
                </TouchableOpacity>


                <TouchableOpacity>
                    <View style={styles.card}>
                        <View style={styles.insideCard}>
                            <Icon name="bank" size={70} color="#0150E3" />
                            <Text style={styles.Text}>Bank</Text>

                        </View>

                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}

export default Wallettype;


const styles = StyleSheet.create({
    card: {
        shadowColor: "#000",
        marginTop: 20,
        alignSelf: 'center',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 2.25,
        shadowRadius: 5.84,

        elevation: 20,
        backgroundColor: 'white',
        height: 160,
        justifyContent: 'center',
        width: wp("94%"),
        borderRadius: 10
    },

    insideCard: {
        flexDirection: 'row',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    Text: {
        fontSize: 33,
        fontWeight: '300',
        color: '#0150E3'
    },
    
});