import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Dimensions, Image } from 'react-native';
import { ListItem, Avatar, Icon, Badge, SearchBar } from 'react-native-elements';
import { Switch } from 'react-native-paper';
import ButtonLarge from '../components/ButtonLarge';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const PhotoFace = ({navigation}) => {
    const [isSwitchOn, setIsSwitchOn] = React.useState(false);
    const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

    return (
        <SafeAreaView style={styles.container}>
            <Image
                style={{ width: windowWidth, height: 250 }}
                source={{
                    uri:
                        "https://i.fbcd.co/products/original/90a8b126496bc53a259a024201a1dbf67959f836d6e739bf96bacdba9de1b276.jpg"
                }}
                resizeMode='cover'
            />
            <Text style={styles.desc}>Do you want to allow the use of face ID and PIN-code?</Text>
            <ListItem containerStyle={styles.itemContainer}>

                <ListItem.Content>
                    <ListItem.Title>Face ID</ListItem.Title>
                    <ListItem.Subtitle>Enable Face ID</ListItem.Subtitle>
                </ListItem.Content>
                <Switch value={isSwitchOn} onValueChange={onToggleSwitch} color='blue' />
            </ListItem>
            <ButtonLarge
                title="Continue"
                onPress={() => navigation.navigate('VerifyAccount')}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    itemContainer: { marginHorizontal: 10, borderRadius: 20 ,marginVertical:10},
    desc: { fontSize: 16, fontWeight: '600', padding: 20, marginHorizontal: 10, marginVertical: 10 },
    tinyLogo: {
        height: 100,
        width: 100,
    },

});

export default PhotoFace;