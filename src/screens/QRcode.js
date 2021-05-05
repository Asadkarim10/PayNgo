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
                        "https://media.istockphoto.com/vectors/modern-id-symbol-vector-id991221056?k=6&m=991221056&s=612x612&w=0&h=dX-LecUn4QJ4W1bHeOu-FN4UfIpWx9K4dicA7OIXzzk="
                }}
                resizeMode='cover'
            />
            <Text style={styles.desc}>Scane your QR to pay</Text>
            
            <ButtonLarge
                title="Scan Now"
                //onPress={() => navigation.navigate('VerifyAccount')}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    itemContainer: { marginHorizontal: 10, borderRadius: 20 ,marginVertical:10},
    desc: { fontSize: 16, fontWeight: '600', padding: 20, marginHorizontal: 10, marginVertical: 10 ,textAlign:'center'},
    tinyLogo: {
        height: 100,
        width: 100,
    },

});

export default PhotoFace;