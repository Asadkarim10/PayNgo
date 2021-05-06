import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Dimensions, ImageBackground } from 'react-native';
import { ListItem, Avatar, Icon } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import { Card } from 'react-native-paper';

const windowHeight = Dimensions.get('window').height;




const Home = ({navigation}) => {

    const DATA = [
        {
            title: 'Add Cash',
            icon: 'add',
            IconColor:'#6B3CE9',
            backgroundColor:'#F3EFFF',
            screen:'Wallettype'
        },
        {
            title: 'Transfer of funds',
            icon: 'arrow-forward',
            IconColor:'#66D59A',
            backgroundColor:'#E6FEF0',
            screen:'TransferFund'
        },
        {
            title: 'Billing Payments',
            icon: 'card-outline',
            IconColor:'#FFC664',
            backgroundColor:'#FFF9EC',
            screen:'QRcode'
        },
        {
            title: 'Tickets',
            icon: 'receipt-outline',
            IconColor:'#FF4134',
            backgroundColor:'#FFF1F0',
            screen:'QRcode'
        },
        {
            title: 'Top Up',
            icon: 'ios-calendar-sharp',
            IconColor:'#FFC664',
            backgroundColor:'#FFF9EC',
            screen:'QRcode'
        },
        {
            title: 'QR Code Payments',
            icon: 'qr-code-outline',
            IconColor:'#6B3CE9',
            backgroundColor:'#F3EFFF',
            screen:'QRcode'
        },
        {
            title: 'Cash Request',
            icon: 'cash-outline',
            IconColor:'#FF4134',
            backgroundColor:'#FFF1F0',
            screen:'QRcode'
        },
        {
            title: 'Beneficiaries Managements',
            icon: 'shield-checkmark-outline',
            IconColor:'#66D59A',
            backgroundColor:'#E6FEF0',
            screen:'QRcode'
        },
    ];
    
    const renderItem = ({ item, index }) => (
        <View style={{flex:1,paddingBottom:10}}>
            <Icon
                containerStyle={{ alignSelf: 'center' }}
                reverse
                name={item.icon}
                type='ionicon'
                color={item.backgroundColor}
                size={23}
                reverseColor={item.IconColor}
                onPress={()=> navigation.navigate(item.screen)}
            />
            <Text style={{ textAlign: 'center', fontSize: 12, color: 'grey',flexWrap:'wrap' }}>{item.title}</Text>
        </View>
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
                Home
            </Text>
        )
    }
    const ListFooter = () => {
        return (
            <View>

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
            <ScrollView>
                <ImageBackground style={{ height: 170, flex: 1 }} source={{ uri: 'https://image.freepik.com/free-vector/business-graph-chart-investment-trading-blue-background_62391-236.jpg' }}>
                    <Text style={{ color: 'white', marginTop: windowHeight / 100 * 10, marginLeft: 20 }}>Savings Account Balance</Text>
                    <Text style={{ color: 'white', fontSize: 40, marginLeft: 20 }}>$3,456<Text style={{ fontSize: 16 }}>.22</Text></Text>
                </ImageBackground>
                <Card style={{ padding: 20, borderWidth: 0.3, borderBottomLeftRadius: 15, borderBottomRightRadius: 15 }}>
                    <View >
                        <Text style={{ color: 'grey' }}>Principal Balance</Text>
                        <Text style={{ color: 'black', fontSize: 40 }}>$22,456<Text style={{ fontSize: 16 }}>.22</Text></Text>
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: 15 }}>
                        <View style={{ flex: 1 }}>
                            <Text style={{ color: 'grey' }}>Current month Payment</Text>
                            <Text style={{ color: 'black', fontSize: 20 }}>$480<Text style={{ fontSize: 12 }}>.22</Text></Text>
                        </View>
                        <View style={{ flex: 1 }}>
                            <Text style={{ color: 'grey' }}>Average Interest rate</Text>
                            <Text style={{ color: 'black', fontSize: 20 }}>6.23<Text style={{ fontSize: 12 }}> %</Text></Text>
                        </View>
                        <View >
                            <Text style={{ color: 'grey' }}>Payoff Date</Text>
                            <Text style={{ color: 'black', fontSize: 20 }}>Dec 2033</Text>
                        </View>
                    </View>
                </Card>
                <Card style={{ padding: 10, borderWidth: 0.3, borderRadius: 15,margin:5 }}>
                    <FlatList
                        data={DATA}
                        renderItem={renderItem}
                        keyExtractor={(item, index) => index.toString()}     //has to be unique 
                        numColumns={4}  
                    // ListHeaderComponent={ListHeader}
                    // ListFooterComponent={ListFooter}

                    />
                </Card>
            </ScrollView>




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

export default Home;