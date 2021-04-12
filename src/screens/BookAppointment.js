import React from 'react';
import { SafeAreaView, View, StyleSheet, Text, FlatList, Dimensions, Image, TextInput } from 'react-native';
import { ListItem, Avatar, Icon, Button, CheckBox } from 'react-native-elements';
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';
import CalendarPicker from 'react-native-calendar-picker';
import { Card, RadioButton } from 'react-native-paper';

const windowHeight = Dimensions.get('window').height;
const CommonColor = '#b3a14b'
const TIME = [
    {
        time: '09:00 AM'
    },
    {
        time: '10:00 AM'
    },
    {
        time: '11:00 AM'
    },
    {
        time: '12:00 AM'
    },
    {
        time: '01:00 AM'
    },
    {
        time: '02:00 AM'
    },
    {
        time: '03:00 AM'
    },
    {
        time: '04:00 AM'
    },
    {
        time: '05:00 AM'
    },
    {
        time: '05:00 AM'
    },
    {
        time: '05:00 AM'
    },
    {
        time: '08:00 AM'
    },
    {
        time: '09:00 AM'
    },
];
const DATA = [
    {
        name: 'Hair cur ',
        avatar_url: 'https://i.pinimg.com/originals/e0/7a/9d/e07a9d4587f2355d46ee05b891578051.jpg',
        subtitle: 'All hair cut included'
    },
    {
        name: 'Hair Color',
        avatar_url: 'https://cdn.shopify.com/s/files/1/0256/9528/9432/products/NEW-ONE_grande.png?v=1589307206',
        subtitle: 'All hair cut included'
    },
    {
        name: 'Hair Massage',
        avatar_url: 'https://cdn.shopify.com/s/files/1/0343/5154/6413/products/beardset_850x.jpg?v=1585660212',
        subtitle: 'All hair cut included '
    },
];
const User = [
    {
        name: 'John nick ',
        avatar_url: 'https://www.menshairstylestoday.com/wp-content/uploads/2019/07/Best-8-9-10-11-12-Year-Old-Boy-Haircuts.jpg',
        subtitle: 'John Nick'
    },
    {
        name: 'Berry Allen',
        avatar_url: 'https://cdn.images.express.co.uk/img/dynamic/79/590x/bieber-404024.jpg',
        subtitle: 'Justin Bieber'
    }
];
const Payment = [
    {
        name: 'Paypal ',
        avatar_url: 'data:image/png;base64,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',
        subtitle: 'John Nick'
    },
    {
        name: 'Pay by Card',
        avatar_url: 'https://www.mastercard.us/content/dam/public/mastercardcom/na/us/en/large-enterprises/images/mastercard-prepaid-debit-card-1280x720.png',
        subtitle: 'Justin Bieber'
    },
    {
        name: 'Pay by Cash',
        avatar_url: 'https://cdn4.vectorstock.com/i/1000x1000/68/18/pay-cash-rubber-stamp-vector-11856818.jpg',
        subtitle: 'Justin Bieber'
    }
];
const BookAppoint = ({ navigation }) => {
    const [checked, setChecked] = React.useState();
    const buttonTextStyle = {
        color: 'white', backgroundColor: CommonColor, height: 30, borderRadius: 20, width: 100, textAlign: 'center',
    };

    const ItemView = ({ item, index }) => {
        return (
            <ListItem bottomDivider key={index}>
                <ListItem.Content>
                    <View style={{ flexDirection: 'row' }}>

                        <ListItem.Title style={{ flex: 1, fontSize: 16 }}>{item.name}</ListItem.Title>
                        <ListItem.Title style={{ flex: 1, fontSize: 16 }}>50 <Text style={{ fontSize: 12 }}>30 min</Text></ListItem.Title>
                        <CheckBox
                            containerStyle={{ padding: 0, margin: 0 }}
                        // checked={Checked}
                        />
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <ListItem.Subtitle style={{ flex: 1 }}>{item.subtitle}</ListItem.Subtitle>

                    </View>

                </ListItem.Content>
            </ListItem>
        );
    };
    // const PaymentView = ({ item, index }) => {
    //     return (
    //         <ListItem bottomDivider key={index}>
    //             <ListItem.Content>
    //                 <View style={{ flexDirection: 'row' }}>

    //                     <ListItem.Title style={{ flex: 1, fontSize: 16 }}>{item.name}</ListItem.Title>
    //                     <Avatar size={40} source={{ uri: item.avatar_url }} />

    //                     <RadioButton
    //                         //value="second"
    //                         //status={checked === 'second' ? 'checked' : 'unchecked'}
    //                         // onPress={() => setChecked('second')}
    //                         color={CommonColor}
    //                     />
    //                 </View>
    //             </ListItem.Content>
    //         </ListItem>
    //     );
    // };
    const renderItem = ({ item, index }) => (
        <View style={{ flex: 1, padding: 5 }}>
            <ListItem containerStyle={{ marginRight: 10 }} key={index} bottomDivider>
                <Avatar size={50} rounded source={{ uri: item.avatar_url }} />
                <ListItem.Content>
                    <ListItem.Title numberOfLines={2}>{item.name}</ListItem.Title>
                </ListItem.Content>
            </ListItem>
        </View>

    );
    const TimeView = ({ item, index }) => (
        <View style={{ flex: 1, padding: 5, backgroundColor: 'white' }}>
            <Card >
                <Text style={styles.CardTitle}>{item.time}</Text>
            </Card>
        </View>

    );
    return (
        <SafeAreaView style={styles.container}>
            <ProgressSteps
                activeLabelColor={CommonColor}
                completedLabelColor={CommonColor}
                completedStepIconColor={CommonColor}
                activeStepIconColor='white'
                activeStepIconBorderColor={CommonColor}
                completedProgressBarColor={CommonColor}
                topOffset={40} onSubmit={()=>navigation.navigate('Login')}>
                <ProgressStep label="Service" nextBtnTextStyle={buttonTextStyle}>
                    <FlatList
                        data={DATA}
                        renderItem={ItemView}
                        keyExtractor={(item, index) => index.toString()}     //has to be unique   

                    />
                </ProgressStep>
                <ProgressStep label="Barber" nextBtnTextStyle={buttonTextStyle} previousBtnTextStyle={buttonTextStyle}>
                    <FlatList
                        data={User}
                        renderItem={renderItem}
                        keyExtractor={(item, index) => index.toString()}     //has to be unique   
                    // numColumns={2}
                    />
                </ProgressStep>
                <ProgressStep label="Date" nextBtnTextStyle={buttonTextStyle} previousBtnTextStyle={buttonTextStyle}>
                    <Text style={styles.Headertext}>
                        Pick Date
                     </Text>

                    <CalendarPicker
                        //  customDatesStyles={customDatesStylesCallback}
                        enableDateChange={false}
                        //onMonthChange={onMonthChange}
                        //selectedStartDate={selectedStartDate}
                        showDayStragglers={true}
                        selectedDayColor="visible"
                        selectedDayTextColor={CommonColor}
                        previousComponent
                        previousComponent={<Icon name='chevron-left'></Icon>}
                        nextComponent={<Icon name='chevron-right'></Icon>}

                    />
                </ProgressStep>
                <ProgressStep label="Time" nextBtnTextStyle={buttonTextStyle} previousBtnTextStyle={buttonTextStyle} onSubmit={()=>console.log('preessed')}>
                    <Text style={styles.Headertext}>
                        Pick Time
                     </Text>
                    <FlatList
                        data={TIME}
                        renderItem={TimeView}
                        keyExtractor={(item, index) => index.toString()}     //has to be unique   
                        numColumns={3}
                    />
                </ProgressStep>
                <ProgressStep label="Payment" nextBtnTextStyle={buttonTextStyle} previousBtnTextStyle={buttonTextStyle}  onSubmit={()=>navigation.navigate('ThankYou')}>
                    <Text style={styles.Headertext}>
                        Payment Method
                     </Text>
                    <ListItem bottomDivider>
                        <ListItem.Content>
                            <View style={{ flexDirection: 'row' }}>
                                <ListItem.Title style={{ flex: 1, fontSize: 16 }}>Paypal</ListItem.Title>
                                <Avatar size={40} source={{ uri: 'data:image/png;base64,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' }} />
                                <RadioButton
                                    //value="second"
                                    //status={checked === 'second' ? 'checked' : 'unchecked'}
                                    // onPress={() => setChecked('second')}
                                    color={CommonColor}
                                />
                            </View>
                        </ListItem.Content>
                    </ListItem>
                    <ListItem bottomDivider>
                        <ListItem.Content>
                            <View style={{ flexDirection: 'row' }}>
                                <ListItem.Title style={{ flex: 1, fontSize: 16 }}>Pay by Card</ListItem.Title>
                                <Avatar size={40} source={{ uri: 'https://www.mastercard.us/content/dam/public/mastercardcom/na/us/en/large-enterprises/images/mastercard-prepaid-debit-card-1280x720.png' }} />
                                <RadioButton
                                    //value="second"
                                    //status={checked === 'second' ? 'checked' : 'unchecked'}
                                    // onPress={() => setChecked('second')}
                                    color={CommonColor}
                                />
                            </View>
                        </ListItem.Content>
                    </ListItem>
                    <ListItem bottomDivider>
                        <ListItem.Content>
                            <View style={{ flexDirection: 'row' }}>
                                <ListItem.Title style={{ flex: 1, fontSize: 16 }}>Pay by Cash</ListItem.Title>
                                <Avatar size={40} source={{ uri: 'https://cdn4.vectorstock.com/i/1000x1000/68/18/pay-cash-rubber-stamp-vector-11856818.jpg' }} />
                                <RadioButton
                                    //value="second"
                                    //status={checked === 'second' ? 'checked' : 'unchecked'}
                                    // onPress={() => setChecked('second')}
                                    color={CommonColor}
                                />
                            </View>
                        </ListItem.Content>
                    </ListItem>
                    <Text style={styles.Headertext}>
                        Card Number
                     </Text>

                    <ListItem bottomDivider topDivider>
                        <ListItem.Content>
                            <View style={{ flexDirection: 'row' }}>
                                <TextInput style={{ flex: 1 }} placeholder='12234-78904-12345' />
                                <Avatar size={40} source={{ uri: 'https://media-exp1.licdn.com/dms/image/C4D0BAQHW9Vyrl6r5ZA/company-logo_200_200/0/1519856212168?e=2159024400&v=beta&t=hJx0T-S3PY62u60prT4SLjF5fHDWHv6edrfjPJnSgGE' }} />

                            </View>
                        </ListItem.Content>
                    </ListItem>
                    <View style={{ flexDirection: 'row',marginTop:5 }}>
                        <Text style={{flex:1,textAlign:'center'}}>Expiration Date</Text>
                        <Text style={{flex:1,textAlign:'center'}}>CVV</Text>

                    </View>
                    <View style={{ flexDirection: 'row',marginTop:5 }}>
                        <Text style={{flex:1,textAlign:'center',color:'grey',fontSize:12}}>24/2</Text>
                        <Text style={{flex:1,textAlign:'center',color:'grey',fontSize:12}}>567</Text>

                    </View>
                </ProgressStep>
            </ProgressSteps>
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
    },
    Headertext: {
        fontSize: 20, color: 'black', marginLeft: '5%',
        marginTop: windowHeight / 100, marginBottom: 10
    },
    CardTitle: {
        padding: 5, textAlign: 'center', paddingVertical: 10, fontSize: 14
    }
});

export default BookAppoint;