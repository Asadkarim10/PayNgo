import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Dimensions } from 'react-native';
import { ListItem, Avatar } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
const windowHeight = Dimensions.get('window').height;

const DATA = [
    {
        name: 'Essex school bans boys from having pompadour ',
        avatar_url: 'https://www.menshairstylestoday.com/wp-content/uploads/2019/07/Best-8-9-10-11-12-Year-Old-Boy-Haircuts.jpg',
        subtitle: 'Justin Bieber hairstyles'
    },
    {
        name: 'How to build a modern man: Helping boys to grow up happy',
        avatar_url: 'https://cdn.images.express.co.uk/img/dynamic/79/590x/bieber-404024.jpg',
        subtitle: 'Hurrah! Haircuts are on the horizon.'
    },
    {
        name: 'Chop, chop! The six biggest spring 2021 hair trends to try right now',
        avatar_url: 'https://media.gq-magazine.co.uk/photos/605a289c14e0d3a874057704/16:9/w_1920%2cc_limit/23112020_TTJ_HP_01.jpg',
        subtitle: 'Hurrah! Haircuts are on the horizon. '
    },
];


const NewsFeed = () => {
    const renderItem = ({ item, index }) => (
        <ListItem containerStyle={{ margin: 3 }} key={index} bottomDivider>
            <Avatar size={80} avatarStyle={{ borderRadius: 15 }} source={{ uri: item.avatar_url }} />
            <ListItem.Content>
                <ListItem.Title numberOfLines={2}>{item.name}</ListItem.Title>
                <ListItem.Subtitle numberOfLines={2}>{item.subtitle}</ListItem.Subtitle>
            </ListItem.Content>
        </ListItem>
    );
    const Item = ({ item, index }) => (
        <View style={{ flexDirection: 'column', marginHorizontal: 10 }}>
            <Avatar avatarStyle={{ borderRadius: 15 }} containerStyle={styles.avatarcontainer} size={100} source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV2T8vS-E8cjj9Qt1cVQ4oJJSDQ5i5xvJD2w&usqp=CAU' }} />
            <Text numberOfLines={1} style={styles.TrendingText} >Cross Fade </Text>
        </View>
    );
    const ListHeader = () => {
        return (
            <Text style={styles.Headertext}>
                News Feed
            </Text>
        )
    }
    const ListFooter = () => {
        return (
            <View>
                <Text style={styles.Headertext}>
                    Trending Haircuts
            </Text>
                <FlatList
                    data={DATA}
                    renderItem={Item}
                    keyExtractor={(item, index) => index.toString()}     //has to be unique   
                    horizontal={true}
                />
            </View>
        )
    }
    return (
        <SafeAreaView style={styles.container}>

            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}     //has to be unique   
                ListHeaderComponent={ListHeader}
                ListFooterComponent={ListFooter}

            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1, marginHorizontal: 5
    },
    Headertext: {
        fontSize: 26, color: 'black', marginLeft: '5%',
        marginTop: windowHeight / 100, marginBottom: 10
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    },
    avatarcontainer:{
        alignSelf: 'center', marginTop: 10
    },
    TrendingText:{
        fontSize: 14, paddingTop: 5, textAlign: 'center'
    }
});

export default NewsFeed;