import React , {Component} from 'react';

import { DrawerItems } from 'react-navigation';

import { View, StyleSheet, Image, Button, Text, TouchableOpacity } from 'react-native';

const companyLogo = require('../images/org/madiba-logo.png');

export default DrawContent = (props) => (

    <View style={styles.container}>
       
            <Image
                source={companyLogo}
                style={styles.logo}
            />

            <DrawerItems {...props} />
       
       

    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    logo: {
        width: 100,
        height: 80,
        padding: 40,
        paddingBottom: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

