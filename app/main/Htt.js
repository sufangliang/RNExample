
import React, { Component } from 'react';
import {StyleSheet, Text, View,FlatList,SectionList,Dimensions,} from 'react-native';

var {height: deviceHeight, width: deviceWidth} = Dimensions.get('window');

export  default class Htt extends Component <{}> {
    render() {
        return (
            <View style={styles.container}>
                <SectionList
                    sections={[
                        {title: "你个哈",data : ['nijijin']},
                        {title: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie','Jackson', 'James', 'Jilliang个安慰；阿帆；收款方那可是的那个；离开过那倒是；格兰卡戴珊；干苏格拉底桑打死了；范大师；浪费可能大；两个散发了三年发生；发哪的时空裂缝那时都；发你看看', 'Jimmy', 'Joel', 'John', 'Julie']},
                    ]}
                    renderItem={({item}) => <Text numberOfLines={10} style={styles.item}>{item}</Text>}
                    renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
                />
            </View>
        )
    }
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22
    },
    sectionHeader: {
        paddingTop: 2,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 2,
        fontSize: 14,
        fontWeight: 'bold',
        backgroundColor: 'rgba(247,247,247,1.0)',
    },
    item: {
        flex: 1,
        padding: 10,
        fontSize: 18,
        // height: 40,
        //设置下面这个换行
        flexWrap: 'wrap',
        width : deviceWidth,
        backgroundColor : 'red'
    },

});
