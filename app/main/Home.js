
import React, { Component } from 'react';
import { AppRegistry, Text} from 'react-native';
import {
    StyleSheet,
    View,
    TouchableOpacity,
    Image,
    // ListView,
    // Dimensions,
    // Navigator,
    // ActivityIndicator,
    // Modal,
    // AsyncStorage,
    // DeviceEventEmitter,
    // InteractionManager,
    // Animated,
} from 'react-native';

import GDBaseNavBar from '../Base/GDBaseNavBar';


export  default class Home extends Component <{}> {


    // 返回左边按钮
    renderLeftItem() {
        return(
            <TouchableOpacity
                // onPress={() => {this.pushToHalfHourHot()}}
            >
                <Image source={{uri:'hot_icon_20x20'}} style={styles.navBarLeftItemStyle} />
            </TouchableOpacity>
        );
    }

    render() {
        return (

            <View style={styles.container}>
                <GDBaseNavBar
                    leftItem = {() => this.renderLeftItem()}
                    // titleItem = {() => this.renderTitleItem()}
                    // rightItem = {() => this.renderRightItem()}
                />
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
