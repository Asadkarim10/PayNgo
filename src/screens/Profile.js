import React from 'react';
import { SafeAreaView, View, StyleSheet, Text, StatusBar, Dimensions, Image } from 'react-native';
import { ListItem, Avatar, Icon, Button } from 'react-native-elements';
const windowHeight = Dimensions.get('window').height;


const Profile = () => {

    return (
        <SafeAreaView style={styles.container}>
            <Image style={styles.avatar} source={{ uri: 'https://i.pinimg.com/originals/0c/3b/3a/0c3b3adb1a7530892e55ef36d3be6cb8.png' }} />
            <Text style={styles.title}>Diljeet</Text>
            <Text style={styles.title}>Diljeet@gmail.com</Text>
            <Button
                title="Edit"
                containerStyle={styles.btnContainer}
                buttonStyle={{ backgroundColor: '#b3a14b' }}
            />
            <Text style={{ textAlign: 'center', fontSize: 16, marginTop: 15 }}>5</Text>
            <Text style={{ textAlign: 'center', fontSize: 16, marginTop: 5 }}>Orders</Text>
            <ListItem bottomDivider topDivider containerStyle={{height:60,marginTop:windowHeight / 100 * 5}}>
                <Icon
                    reverse
                    name='receipt'
                    type='ionicon'
                    color='#b3a14b'
                    size={20}
                    
                />
                <ListItem.Content>
                    <ListItem.Title>Payments</ListItem.Title>
                </ListItem.Content>
            </ListItem>
            <ListItem bottomDivider containerStyle={{height:60}}>
                <Icon
                    reverse
                    name='log-out'
                    type='ionicon'
                    color='#c20a28'
                    size={20}
                />
                <ListItem.Content>
                    <ListItem.Title>Logout</ListItem.Title>
                </ListItem.Content>
            </ListItem>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1, marginHorizontal: 5, backgroundColor: 'white'
    },
    title: {
        color: '#b3a14b', textAlign: 'center', fontSize: 14, fontWeight: 'bold'
    },
    avatar: {
        width: 75, height: 75, alignSelf: 'center', marginTop: windowHeight / 100 * 5
    },
    btnContainer: {
        width: 120, height: 40, alignSelf: 'center', borderRadius: 20, marginVertical: 10
    }
});

export default Profile;