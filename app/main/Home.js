
import React, { Component } from 'react';
import { AppRegistry, Text} from 'react-native';
import {
    StyleSheet,
    View,
} from 'react-native';

export  default class Home extends Component <{}> {
    render() {
        return (

            <View style={styles.container}>
                {/*console.log(homeviewhome)*/}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center',
        backgroundColor: 'red',
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
