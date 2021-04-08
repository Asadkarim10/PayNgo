import React, { useState } from 'react';
import { View, Dimensions, TouchableOpacity, Text, ScrollView } from 'react-native';
import Input from '../Components/TextInput';
import ButtonLarge from '../Components/ButtonLarge';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

function Login({navigation}) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <ScrollView>
                <Text style={{
                    fontSize: 32, color: '#707070', fontFamily: 'OpenSans-Regular', marginLeft: '5%',
                    marginTop: windowHeight / 100 * 5, marginBottom: 40
                }}>
                    Log in to your {'\n'}Account
            </Text>

                <Input
                    placeholder="Email"
                    onChangeText={text => setEmail(text)}
                    value={email}
                />

                <Input
                    placeholder="Password"
                    value={password}
                    onChangeText={text => setPassword(text)}
                />

                <TouchableOpacity onPress = {() => navigation.navigate("ResetPassword")} style={{ alignSelf: 'flex-end', marginRight: '5%' }}>

                    <Text style={{
                        fontSize: 14, color: '#707070', fontFamily: 'OpenSans-SemiBold',
                        marginTop: 10,
                    }}>
                        Forgot password ?
                </Text>

                </TouchableOpacity>

                <ButtonLarge
                    title="Log in"
                    onPress = {() => navigation.navigate("OtpVerify")}
                />

                <View style={{ marginTop: 15, alignSelf: 'center', alignItems: 'center', flexDirection: 'row' }}>

                    <Text style={{
                        fontSize: 14, color: '#707070', fontFamily: 'OpenSans-Regular',
                        marginTop: 10,
                    }}>
                        New User ? </Text>

                    <TouchableOpacity onPress = {() => navigation.navigate("createAccount")} style={{ alignSelf: 'flex-end', marginRight: '5%' }}>

                        <Text style={{
                            fontSize: 14, color: '#707070', fontFamily: 'OpenSans-SemiBold',
                            marginTop: 10,
                        }}>
                            CREATE ACCOUNT
                        </Text>

                    </TouchableOpacity>

                </View>
            </ScrollView>
        </View>
    );
}

export default Login;