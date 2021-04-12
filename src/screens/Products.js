import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Dimensions } from 'react-native';
import { ListItem, Avatar, Icon, Badge,SearchBar } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
const windowHeight = Dimensions.get('window').height;

const DATA = [
    {
        name: 'Anti mark targeted correctting right on ',
        avatar_url: 'https://i.pinimg.com/originals/e0/7a/9d/e07a9d4587f2355d46ee05b891578051.jpg',
        subtitle: '52'
    },
    {
        name: 'Beard oil that penetrates deep into beards',
        avatar_url: 'https://cdn.shopify.com/s/files/1/0256/9528/9432/products/NEW-ONE_grande.png?v=1589307206',
        subtitle: '30'
    },
    {
        name: 'THE ORIGINAL BARBER SHOP BEARD KIT',
        avatar_url: 'https://cdn.shopify.com/s/files/1/0343/5154/6413/products/beardset_850x.jpg?v=1585660212',
        subtitle: '40 '
    },
];


const Products = () => {
    const renderItem = ({ item, index }) => (
        <View style={{ backgroundColor: 'white', margin: 3, padding: 5 }}>
            <View >
                <ListItem containerStyle={{ margin: 3 }} key={index}>
                    <Avatar size={80} avatarStyle={{ borderRadius: 0 }} source={{ uri: item.avatar_url }} />
                    <ListItem.Content>
                        <ListItem.Title numberOfLines={2} style={{ fontSize: 16 }}>{item.name}</ListItem.Title>
                        <ListItem.Subtitle numberOfLines={2} style={{ padding: 5 }}>{item.subtitle}</ListItem.Subtitle>
                    </ListItem.Content>
                </ListItem>
            </View>
            <View style={{ flexDirection: 'row' }}>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <Icon
                        // reverse
                        containerStyle={{ borderWidth: 1, height: 30, width: 45 }}
                        name='remove'
                        type='ionicon'
                        color='black'
                        size={30}
                    />
                    <Text style={{ color: '#b3a14b', marginHorizontal: 20, fontSize: 20 }}>1</Text>
                    <Icon
                        containerStyle={{ borderWidth: 1, height: 30, width: 45 }}
                        // reverse
                        name='add-outline'
                        type='ionicon'
                        color='black'
                        size={30}
                    />
                </View>

                <Icon
                    containerStyle={{ borderWidth: 0.2 }}
                    reverse
                    name='cart-outline'
                    type='ionicon'
                    color='white'
                    size={20}
                    reverseColor='#b3a14b'
                />
            </View>
        </View>
    );
    const ListHeader = () => {
        return (
            <View>
                <View>
                    <Text style={styles.Headertext}>
                        Products
                     </Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ flex: 1, marginTop: 10 }}>
                        
                        <SearchBar
                           // onChangeText={(search) => setsearch(search)}
                            containerStyle={{ borderTopWidth: 0, borderBottomWidth: 0, backgroundColor: 'white' }}
                            inputContainerStyle={{ backgroundColor: 'white', height: 30 }}
                            placeholder="Search Products"
                            fontSize={14}
                           // value={search}
                            leftComponent={{ icon: 'menu', color: 'gray' }}

                        />
                    </View>
                    <View>
                        <Icon
                            reverse
                            name='cart-outline'
                            type='ionicon'
                            color='#b3a14b'
                            size={25}
                        />
                        <Badge value="2" status="error" containerStyle={{ position: 'absolute', top: 10, right: 10 }} />
                    </View>
                </View>
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
    avatarcontainer: {
        alignSelf: 'center', marginTop: 10
    },
    TrendingText: {
        fontSize: 14, paddingTop: 5, textAlign: 'center'
    }
});

export default Products;