import Home from "./Home";
import Profile from "./Profile";
import React from 'react';

import { Component } from 'react';
import { View, StyleSheet, Image } from 'react-native';

const applicationLogo = require('../images/org/madiba-logo.png');

export default class SideMenuScreen extends Component {
  //   static navigationOptions = {
  //     screen : Home,
  //     drawerLabel: 'Home',
  //     drawerIcon: ({ tintColor }) => (
  //       <Image
  //         source={applicationLogo}
  //         style={[styles.logo, {tintColor: tintColor}]}
  //       />
  //     ),
  //   };

  render() {
    return (
      <View>
        <Text>Hello World</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  logoContainer: {
    padding: 20,
    // flexGrow: 2,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  logo: {
    width: 40,
    height: 30,
  },
});

