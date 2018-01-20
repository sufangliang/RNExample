import React, { Component } from 'react';
import {
    StyleSheet,
    Image,
    Platform,
    DeviceEventEmitter,
    AppRegistry
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import {Navigator} from 'react-native-deprecated-custom-components';
// import PropTypes from 'prop-types'

import Home from './app/main/Home'
import Htt from './app/main/Htt'
import Mine from './app/main/Mine'

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

    // 获取最新数据个数网络请求
    loadDataNumber() {


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
    // 点击了Item
    clickItem(selectedTab, subscription) {

        if (subscription !== "" && this.state.selectedTab == selectedTab) {
            // 发送通知
            DeviceEventEmitter.emit(subscription);
        }
        console.log(selectedTab)
        // 渲染页面
        this.setState({ selectedTab: selectedTab })
    }

    // 组件加载完成
    componentDidMount() {
        // 注册通知
        this.subscription = DeviceEventEmitter.addListener('isHiddenTabBar', (data)=>{this.hiddenTabBar(data)});

        // 最新数据的个数
        setInterval(() => {
            this.loadDataNumber();
        }, 30000);
    }

    // 设置 Navigator 转场动画
    setNavAnimationType(route) {
        if (route.animationType) {      // 有值
            let conf = route.animationType;
            conf.gestures = null;           // 关闭返回手势
            return conf;
        }else {
            return Navigator.SceneConfigs.PushFromRight;    // 默认转场动画
        }
    }

    // 隐藏 TabBar
    hiddenTabBar(data) {
        this.setState({
            isHiddenTabBar:data,
        })
    }
    // 组件即将销毁
    componentWillUnmount() {
        // 销毁
        this.subscription.remove();
    }


    render() {
        return (
            <TabNavigator
                tabBarStyle={this.state.isHiddenTabBar !== true ? {} : {height:0, overflow:'hidden'}}
                sceneStyle={this.state.isHiddenTabBar !== true ? {} : {paddingBottom:0}}
            >
                {/* 首页 */}
                {this.renderTabBarItem("首页", 'Home', 'tabbar_home_30x30', 'tabbar_home_selected_30x30', Home, this.state.cnbadgeText, "clickHomeItem")}
                {/* 海淘 */}
                {this.renderTabBarItem("一键交单", 'htt', 'tabbar_abroad_30x30', 'tabbar_abroad_selected_30x30', Htt, this.state.usbadgeText, "clickHTItem")}
                {/* 小时风云榜 */}
                {this.renderTabBarItem("我的", 'mine', 'tabbar_rank_30x30', 'tabbar_rank_selected_30x30', Mine)}
            </TabNavigator>
        );
    }
}

    const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000000',
    },
    tabbarIconStyle: {
        width:Platform.OS === 'ios' ? 30 : 25,
        height:Platform.OS === 'ios' ? 30 : 25,
     }
    });




// 注意，这里用引号括起来的'HelloWorldApp'必须和你init创建的项目名一致
AppRegistry.registerComponent('RNExample', () => RNExample);
