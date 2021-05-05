import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import { SafeAreaView, Text, StyleSheet, Dimensions } from 'react-native';
import ButtonLarge from '../components/ButtonLarge';

import {
    CodeField,
    Cursor,
    useBlurOnFulfill,
    useClearByFocusCell,
} from 'react-native-confirmation-code-field';
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    root: { flex: 1, padding: 20 },
    title: { textAlign: 'center', fontSize: 30, fontWeight: 'bold', marginTop: windowHeight / 100 * 10 },
    description: { textAlign: 'center', fontSize: 14 },
    Phone: { textAlign: 'center', fontSize: 14, color: 'blue', textDecorationLine: 'underline', padding: 5, marginBottom: 30 },
    Resend: { textAlign: 'center', fontSize: 14, color: 'blue', textDecorationLine: 'underline', padding: 5, marginTop: 30 },
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

const CELL_COUNT = 6;

const OTP = ({navigation}) => {
    const [value, setValue] = useState('');
    const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
        value,
        setValue,
    });

    return (
        <SafeAreaView style={styles.root}>
            <ScrollView>
                <Text style={styles.title}>Enter your Securty Code</Text>
                <Text style={styles.description}>We sent a text message to your phone with security code.Please enter into field below to verify your number</Text>
                <Text style={styles.Phone}>12334567890</Text>
                <CodeField
                    ref={ref}
                    {...props}
                    // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
                    value={value}
                    onChangeText={setValue}
                    cellCount={CELL_COUNT}
                    rootStyle={styles.codeFieldRoot}
                    keyboardType="number-pad"
                    textContentType="oneTimeCode"
                    renderCell={({ index, symbol, isFocused }) => (
                        <Text
                            key={index}
                            style={[styles.cell, isFocused && styles.focusCell]}
                            onLayout={getCellOnLayoutHandler(index)}>
                            {symbol || (isFocused ? <Cursor /> : null)}
                        </Text>
                    )}
                />
                <Text style={styles.Resend}>Resend Security Code</Text>
                <ButtonLarge
                    title="CONFIRM"
                    onPress={() => navigation.navigate('Home')}
                />
            </ScrollView>
        </SafeAreaView>
    );
};

export default OTP;