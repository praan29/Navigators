import React from "react";
import { StackNavigator, TabNavigator, DrawerNavigator } from "react-navigation";

import { View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import Home from "./views/Home";
import SignUp from "./views/SignUp";
import SignIn from "./views/SignIn";
import Profile from "./views/Profile";

export const SignedIn = DrawerNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            drawerLabel: 'Home',
            drawerIcon: () => (
                <FontAwesome name="home" size={19}  />
            )
        }
    },
    Profile: {
        screen: Profile,
        navigationOptions: {
            title: "My Profile",
        }
    }

});

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
            headerMode: "none",
            mode: "modal",
            initialRouteName: signedIn ? "SignedIn" : "SignedOut"
        }
    );
}