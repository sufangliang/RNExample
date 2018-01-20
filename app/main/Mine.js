
import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    WebView,
    Dimensions,
} from 'react-native';
import {PropTypes} from 'prop-types'

var {height: deviceHeight, width: deviceWidth} = Dimensions.get('window');

export  default class Mine extends Component <{}> {
    static propTypes = {
        url:PropTypes.string,
    };


    render() {
        return (
            <View style={styles.container}>
                <WebView
                    ref = "webView"
                    source ={{uri:'http://wwww.baidu.com' ,method: 'GET'}}
                    style={styles.webViewStyle}
                    scalesPageToFit={false}  // 不允许网页缩放或用户改变缩放比例
                />
            </View>
        )
    }
}



const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center',
        backgroundColor: 'blue',
    },

    webViewStyle: {
        width: deviceWidth,           height: deviceHeight
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
