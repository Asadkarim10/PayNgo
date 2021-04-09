import * as React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const Input = ({ placeholder, value, onChangeText }) => {
    return (
        <TextInput style={styles.input}
            placeholder={placeholder}
            placeholderTextColor = "#7D7D7D"
            value={value}
            onChangeText={onChangeText}
        />
    );
}

export default Input;

const styles = StyleSheet.create({
    input: {
        height: 50,
        width: '90%',
        backgroundColor: 'white',
        borderRadius: 8,
        alignSelf: 'center',
        marginTop: 10,
        paddingHorizontal: 15,
        fontSize: 16,
        color: '#7D7D7D',
        fontFamily: 'OpenSans-Regular'
    }
})