import React from 'react';
import { SafeAreaView, View, StyleSheet, Text, Dimensions } from 'react-native';
import ButtonLarge from '../components/ButtonLarge';

const windowHeight = Dimensions.get('window').height;

const Options = ({ navigation }) => {

    return (
        <SafeAreaView style={styles.container}>
            <ButtonLarge
                title="Open Account"
                onPress={() => navigation.navigate('Register')}
            />
            <ButtonLarge
                title="Connexion"
                onPress={() => navigation.navigate('Login')}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1, alignItems: 'center', justifyContent: 'center'
    }
});

export default Options;