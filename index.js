import React, { Component } from 'react';
import {
    StyleSheet,
    Image,
    Platform,
    View,
    AppRegistry
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import {Navigator} from 'react-native-deprecated-custom-components';
import PropTypes from 'prop-types'



import Home from './Home'

class RNExample extends Component {

    // ES6
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            selectedTab:'home',     // 首选页面
            isHiddenTabBar:false,   // 是否隐藏tabBar
            cnbadgeText:'',         // 首页Item角标文本
            usbadgeText:''          // 海淘Item角标文本
        };
    }

// 返回 TabBar 的 Item
    renderTabBarItem(title, selectedTab, image, selectedImage, component, badgeText, subscription) {
        return(
            <TabNavigator.Item
                selected={this.state.selectedTab === selectedTab}
                title={title}
                badgeText={badgeText == 0 ? '' : badgeText}
                selectedTitleStyle={{color:'black'}}
                renderIcon={() => <Image source={{uri:image}} style={styles.tabbarIconStyle} />}
                renderSelectedIcon={() => <Image source={{uri:selectedImage}} style={styles.tabbarIconStyle} />}
                onPress={() => this.clickItem(selectedTab, subscription)}>

                <Navigator
                    initialRoute={{
                        name:selectedTab,
                        component:component
                    }}

                    configureScene={(route) => this.setNavAnimationType(route)}

                    renderScene={(route, navigator) => {
                        let Component = route.component;
                        return <Component {...route.params}
                                          navigator={navigator}
                                          loadDataNumber={() => this.loadDataNumber()} />
                    }}

                />
            </TabNavigator.Item>
        );
    }


    render() {
        return (
           <View></View>
        );
    }
}


    const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    tabbarIconStyle: {
        width:Platform.OS === 'ios' ? 30 : 25,
        height:Platform.OS === 'ios' ? 30 : 25,
    }
    });




// 注意，这里用引号括起来的'HelloWorldApp'必须和你init创建的项目名一致
AppRegistry.registerComponent('RNExample', () => RNExample);
