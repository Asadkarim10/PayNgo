import * as React from 'react';
import {  StyleSheet } from 'react-native';
import { Input } from 'react-native-elements';
import Icon from "react-native-vector-icons/Ionicons";

const TextInput = ({ placeholder, value, onChangeText ,label,icon,secureTextEntry}) => {
    return (
        <Input
            placeholder={placeholder}
            value={value}
            onChangeText={onChangeText}
            label={label}
            inputStyle={{fontSize:14}}
            labelStyle={{fontSize:14}}
            containerStyle={{height:90}}
            secureTextEntry={secureTextEntry}
            leftIcon={
                <Icon
                    name={icon}
                    size={20}
                    color='grey'
                />
            }
        />
        // <TextInput style={styles.input}
        //     placeholder={placeholder}
        //     placeholderTextColor = "#7D7D7D"
        //     value={value}
        //     onChangeText={onChangeText}
        // />
    );
}

export default TextInput;

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