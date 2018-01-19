
import React, { Component } from 'react';
import {AppRegistry, StyleSheet, Text, View} from 'react-native';


export  default class Htt extends Component <{}> {
    render() {
        return (
            <View style={styles.container}>

            </View>
        )
    }
}



const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center',
        backgroundColor: 'white',
    },

    navBarLeftItemStyle: {
        width:20,
        height:20,
        marginLeft:15,
    },
    navBarTitleItemStyle: {
        width:66,
        height:20,
    },
    navBarRightItemStyle: {
        width:20,
        height:20,
        marginRight:15,
    },


});
