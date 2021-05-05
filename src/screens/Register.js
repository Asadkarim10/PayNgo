import React, { useState, useEffect } from 'react';
import { View, Dimensions, TouchableOpacity, Text, ScrollView, StyleSheet, Keyboard } from 'react-native';
import Input from '../components/TextInput';
import ButtonLarge from '../components/ButtonLarge';
import { SocialIcon } from 'react-native-elements'

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
        <View style={{ flex: 1, marginHorizontal: 10 ,marginBottom:20}}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Text style={styles.title}>
                    Sign up
            </Text>

                <Input
                    placeholder="Username"
                    icon='person'
                    label='First Name'
                // onChangeText={text => setEmail(text)}
                //value={email}
                />
                <Input
                    placeholder="Email"
                    icon='mail-outline'
                    label='Email'
                // value={password}
                // onChangeText={text => setPassword(text)}
                />
                <Input
                    placeholder="Phone Number"
                    icon='call-outline'
                    label='Phone Number'
                // onChangeText={text => setEmail(text)}
                // value={email}
                />
                <Input
                    placeholder="Password"
                    icon='lock-open-outline'
                    label='Password'
                    // value={password}
                    secureTextEntry={true}
                // onChangeText={text => setPassword(text)}
                />
                <Input
                    placeholder="Pays"
                    icon='cash-outline'
                    label='Pays '
                // value={password}
                // onChangeText={text => setPassword(text)}
                />
                <Input
                    placeholder="Code References [ If You Have ] "
                    icon='md-keypad-outline'
                    label='Code References '
                // value={password}
                // onChangeText={text => setPassword(text)}
                />

                <ButtonLarge
                    title="SIGN UP"
                    onPress={() => navigation.navigate('PhotoFace')}
                />
                {/* <Text style={{ textAlign: 'center', marginVertical: 10 }}>────────  OR  ────────</Text>
                <View style={{ flexDirection: 'row' }}>
                    <SocialIcon
                        style={{ flex: 1,height:45,fontSize:12 }}
                        iconSize={15}
                        title='Google'
                        button
                        type='google'
                    />
                    <SocialIcon
                        style={{ flex: 1,height:45,fontSize:12 }}
                        iconSize={15}
                        title='Facebook'
                        button
                        type='facebook'
                    />
                </View> */}
            </ScrollView>

        </View>
    );
}

export default Register;

const styles = StyleSheet.create({
    title: {
        fontSize: 26, color: 'black', marginLeft: '5%',
        marginTop: windowHeight / 100 * 10, marginBottom: 20
    },

})