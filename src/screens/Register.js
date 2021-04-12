import React, { useState, useEffect } from 'react';
import { View, Dimensions, TouchableOpacity, Text, ScrollView, StyleSheet, Keyboard } from 'react-native';
import Input from '../components/TextInput';
import ButtonLarge from '../components/ButtonLarge';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

function Register({ navigation }) {
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
                    marginTop: windowHeight / 100 * 8, marginBottom: 20
                }}>
                    Sign up
            </Text>

                <Input
                    placeholder="Username"
                    onChangeText={text => setEmail(text)}
                    value={email}
                />
                <Input
                    placeholder="Email"
                    value={password}
                    onChangeText={text => setPassword(text)}
                /><Input
                    placeholder="Mobile Number"
                    value={password}
                    onChangeText={text => setPassword(text)}
                />
                <Input
                    placeholder="Password"
                    value={password}
                    onChangeText={text => setPassword(text)}
                />
                <Input
                    placeholder="Confirm Password"
                    value={password}
                    onChangeText={text => setPassword(text)}
                />


                <ButtonLarge
                    title="Sign up"
                    onPress={() => console.log("Button Pressed!")}
                />

            </ScrollView>
            {!isKeyboardVisible ?
                <View style={{ marginTop: 15, alignSelf: 'center', alignItems: 'center', flexDirection: 'row', bottom: 0, marginBottom: 20 }}>

                    <Text style={{
                        fontSize: 16, color: 'white',
                        marginTop: 10,
                    }}>
                        Already have an account? </Text>

                    <TouchableOpacity style={{ alignSelf: 'flex-end', marginRight: '5%' }} onPress={()=>navigation.navigate('Login')}>

                        <Text style={{
                            fontSize: 16, color: '#D6B149',
                            marginTop: 10,
                        }}>
                            Log in
                        </Text>

                    </TouchableOpacity>

                </View>
                : null
            }
        </View>
    );
}

export default Register;

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