// In App.js in a new project

import * as React from 'react';
import { View, Text, Image, FlatList } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Input, Button, BottomSheet, ListItem, Avatar } from 'react-native-elements';

const Tab = createMaterialTopTabNavigator();
const DATA = [
    {
        name: 'Hair cut ',
        avatar_url: 'https://www.menshairstylestoday.com/wp-content/uploads/2019/07/Best-8-9-10-11-12-Year-Old-Boy-Haircuts.jpg',
        subtitle: 'John Nick'
    },
    {
        name: 'Hair Color',
        avatar_url: 'https://cdn.images.express.co.uk/img/dynamic/79/590x/bieber-404024.jpg',
        subtitle: 'Justin Bieber'
    }
];


function UPCOMING() {
    const renderItem = ({ item, index }) => (
        <View style={{ flexDirection: 'row' }}>
            <View style={{ flexDirection: 'column', flex: 2, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ fontWeight: 'bold' }}>December 12</Text>
                <Text>Thu 9:30</Text>

            </View>
            <View style={{ flex: 3, padding: 5 }}>
                <ListItem containerStyle={{ marginRight: 10 }} key={index} bottomDivider>
                    <Avatar size={50} rounded source={{ uri: item.avatar_url }} />
                    <ListItem.Content>
                        <ListItem.Title numberOfLines={2}>{item.name}</ListItem.Title>
                        <ListItem.Subtitle numberOfLines={2}>{item.subtitle}</ListItem.Subtitle>
                    </ListItem.Content>
                </ListItem>
            </View>

        </View>
    );
    return (
        <View>
            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}     //has to be unique   

            />


        </View>
    );
}

function PREVIOUS() {
    const renderItem = ({ item, index }) => (
        <View style={{ flexDirection: 'row' }}>
            <View style={{ flexDirection: 'column', flex: 2, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ fontWeight: 'bold' }}>December 12</Text>
                <Text>Thu 9:30</Text>

            </View>
            <View style={{ flex: 3, padding: 5 }}>
                <ListItem containerStyle={{ marginRight: 10 }} key={index} bottomDivider>
                    <Avatar size={50} rounded source={{ uri: item.avatar_url }} />
                    <ListItem.Content>
                        <ListItem.Title numberOfLines={2}>{item.name}</ListItem.Title>
                        <ListItem.Subtitle numberOfLines={2}>{item.subtitle}</ListItem.Subtitle>
                    </ListItem.Content>
                </ListItem>
            </View>

        </View>
    );
    return (
        <View>
            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}     //has to be unique   
            />
        </View>
    );
}

function NewsFeed() {
    return (
        <View style={{ flex: 1 }}>
            <Tab.Navigator initialRouteName="MYRequests" tabBarOptions={{

                labelStyle: { fontSize: 12, fontWeight: 'bold' },
                tabStyle: { backgroundColor: 'white' },
                activeTintColor: '#b3a14b',
                inactiveTintColor: 'grey'
            }}>
                <Tab.Screen
                    name="UPCOMING"
                    component={UPCOMING}
                    options={{ tabBarLabel: 'UPCOMING' }}
                />
                <Tab.Screen
                    name="PREVIOUS"
                    component={PREVIOUS}
                    options={{ tabBarLabel: 'PREVIOUS' }}
                />

            </Tab.Navigator>
        </View>
    );
}

export default NewsFeed;