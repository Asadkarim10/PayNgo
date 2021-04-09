import React, { useState, useEffect } from 'react';
import { View, Dimensions, TouchableOpacity, Text, ScrollView, StyleSheet, Keyboard } from 'react-native';
import Input from '../components/TextInput';
import ButtonLarge from '../components/ButtonLarge';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

function Login({ navigation }) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [isKeyboardVisible, setKeyboardVisible] = useState(false);

    useEffect(() => {
        const keyboardDidShowListener = Keyboard.addListener(
            'keyboardDidShow',
            () => {
                setKeyboardVisible(true); // or some other action
            }
        );
        const keyboardDidHideListener = Keyboard.addListener(
            'keyboardDidHide',
            () => {
                setKeyboardVisible(false); // or some other action
            }
        );

        return () => {
            keyboardDidHideListener.remove();
            keyboardDidShowListener.remove();
        };
    }, []);
    return (
        <View style={{ flex: 1, backgroundColor: '#332B1F' }}>
            <ScrollView>
                <Text style={{
                    fontSize: 26, color: 'white', marginLeft: '5%',
                    marginTop: windowHeight / 100 * 5, marginBottom: 20
                }}>
                    Hi, {'\n'}Welcome back!
            </Text>

                <Input
                    placeholder="Username"
                    onChangeText={text => setEmail(text)}
                    value={email}
                />

                <Input
                    placeholder="Password"
                    value={password}
                    onChangeText={text => setPassword(text)}
                />

                <TouchableOpacity style={{ alignSelf: 'flex-end', marginRight: '5%' }}>

                    <Text style={{
                        fontSize: 16, color: '#D6B149', fontFamily: 'OpenSans-SemiBold',
                        marginTop: 15,
                    }}>
                        Forgot your password ?
                </Text>

                </TouchableOpacity>

                <View style={{ height: 30 }} />

                <ButtonLarge
                    title="Log In"
                    onPress={() => console.log("Button Pressed!")}
                />

                <TouchableOpacity
                    activeOpacity={0.5}
                    onPress={() => console.log("Button Pressed!")}
                    style={styles.buttonStyleFb}>
                    <Text style={styles.buttonTitleStyleFb}>Facebook</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    activeOpacity={0.5}
                    onPress={() => console.log("Button Pressed!")}
                    style={styles.buttonStyleGoogle}>
                    <Text style={styles.buttonTitleStyleGoogle}>Google</Text>
                </TouchableOpacity>

            </ScrollView>
            {!isKeyboardVisible ?
                <View style={{ marginTop: 15, alignSelf: 'center', alignItems: 'center', flexDirection: 'row', bottom: 0, marginBottom: 20 }}>

                    <Text style={{
                        fontSize: 16, color: 'white',
                        marginTop: 10,
                    }}>
                        Don't have an account? </Text>

                    <TouchableOpacity style={{ alignSelf: 'flex-end', marginRight: '5%' }}>

                        <Text style={{
                            fontSize: 16, color: '#D6B149',
                            marginTop: 10,
                        }}>
                            Sign Up
                        </Text>

                    </TouchableOpacity>

                </View>
                : null
            }
        </View>
    );
}

export default Login;

const styles = StyleSheet.create({
    buttonStyleFb: {
        backgroundColor: '#1467E9',
        height: 50,
        width: '90%',
        marginTop: 10,
        justifyContent: 'center',
        alignSelf: 'center',
        borderRadius: 8,
        elevation: 10
    },
    buttonTitleStyleFb: {
        textAlign: "center",
        fontSize: 18,
        color: '#ffffff'
    },
    buttonStyleGoogle: {
        backgroundColor: '#F44848',
        height: 50,
        width: '90%',
        marginTop: 10,
        justifyContent: 'center',
        alignSelf: 'center',
        borderRadius: 8,
        elevation: 10
    },
    buttonTitleStyleGoogle: {
        textAlign: "center",
        fontSize: 18,
        color: '#ffffff'
    },
})