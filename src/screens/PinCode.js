import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import { SafeAreaView, Text, StyleSheet, Dimensions } from 'react-native';
import ButtonLarge from '../components/ButtonLarge';
import PINCode from '@haskkor/react-native-pincode'
import {
    CodeField,
    Cursor,
    useBlurOnFulfill,
    useClearByFocusCell,
} from 'react-native-confirmation-code-field';
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    root: { flex: 1 },
    title: { textAlign: 'center', fontSize: 30, fontWeight: 'bold', marginTop: windowHeight / 100 * 10 },
    description: { textAlign: 'center', fontSize: 14 },
    Phone: { textAlign: 'center', fontSize: 14, color: 'blue', textDecorationLine: 'underline', padding: 5, marginBottom: 30 },
    Resend: { textAlign: 'center', fontSize: 14, color: 'blue', textDecorationLine: 'underline', padding: 5, },
    codeFieldRoot: { marginTop: 20 },
    cell: {
        width: 40,
        height: 40,
        lineHeight: 38,
        fontSize: 24,
        borderWidth: 2,
        borderColor: '#00000030',
        textAlign: 'center',
    },
    focusCell: {
        borderColor: '#000',
    },
});


const PinCode = ({ navigation }) => {
    

    return (
        <SafeAreaView style={styles.root}>
                <PINCode status={'choose'}
                    touchIDDisabled={true}
                    vibrationEnabled={false}
                    titleChoose='Enter Your Pin'
                    titleConfirm='Confirm Your PIN' 
                    colorCircleButtons='#0150E3'
                    numbersButtonOverlayColor='#909DB2'
                    colorPassword='#FF6C93'
                    colorPasswordEmpty='white'
                    styleMainContainer={{backgroundColor:'#0150E3'}}
                    maxAttempts={2}/>



                {/* <ButtonLarge
                    title="CONFIRM"
                    onPress={() => navigation.navigate('Home')}
                /> */}
        </SafeAreaView>
    );
};

export default PinCode;