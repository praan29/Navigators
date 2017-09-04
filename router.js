import React from 'react';
import { Component } from 'react';
import { StackNavigator, TabNavigator, DrawerNavigator, DrawerItems } from "react-navigation";
import { View, StyleSheet, Image, Button, Text, ScrollView } from 'react-native';

import MIcon from 'react-native-vector-icons/MaterialIcons';
import FIcon from 'react-native-vector-icons/FontAwesome';

import Home from "./views/Home";
import SignUp from "./views/SignUp";
import SignIn from "./views/SignIn";
import Profile from "./views/Profile";
import DrawContent from "./views/DrawContent";


export const homeScreen = StackNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            title: "Home",
            // headerRight : (
            //         <MIcon name="backspace" size={25} color="#000" backgroundColor="#fff" style = {{paddingRight: 10,color: '#7f8c8d'}} />
            // ),
        }
    }
});

export const SignedIn = DrawerNavigator({
    Home: {
        screen: homeScreen,
    },
    Profile: {
        screen: Profile,
        navigationOptions: {
            title: "Profile",
        }
    }
},
    {
        drawerWidth: 250,
        drawerPosition: 'left',
        contentComponent: (props) => <ScrollView >
            <DrawContent  {...props}
            />
        </ScrollView>
    }
);



export const SignedOut = StackNavigator({
    SignUp: {
        screen: SignUp,
        navigationOptions: {
            title: "Sign Up",
        }
    },
    SignIn: {
        screen: SignIn,
        navigationOptions: {
            title: "Sign In",
        }
    }

});

export const createRootNavigator = (signedIn = false) => {
    return StackNavigator(
        {
            SignedIn: {
                screen: SignedIn,
                navigationOptions: {
                    gesturesEnabled: false
                }
            },
            SignedOut: {
                screen: SignedOut,
                navigationOptions: {
                    gesturesEnabled: false
                }
            }
        },
        {
            headerMode: 'none',
            mode: "modal",
            initialRouteName: signedIn ? "SignedIn" : "SignedOut"
        });
}
