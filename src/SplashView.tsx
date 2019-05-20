import React, {Component, PureComponent} from 'react';
import {StyleSheet, StyleProp, ViewStyle, Image, ImageRequireSource, Animated} from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import {Col, TextCustom} from "my-rn-base-component";
import {RNCommonUtils} from "my-rn-base-utils";
import {AnimatedEllipsis} from "./AnimatedEllipsis";

interface Props {
    appIcon: ImageRequireSource
}


export class SplashView extends PureComponent<Props, { appName: string, visible: boolean }> {
    private _visibility: Animated.Value;

    constructor(props) {
        super(props);
        // @ts-ignore
        Animated.LinearGradient = Animated.createAnimatedComponent(LinearGradient);

        this.state = {appName: "", visible: true};
        this._visibility = new Animated.Value(1);
    }

    async componentDidMount() {
        let appName = await RNCommonUtils.getAppName();
        this.setState({appName: appName});
    }

    hide(callback?: VoidFunction, isUsingAnim: boolean = true) {
        if (!this.state.visible) return;

        if (isUsingAnim) {
            Animated.timing(this._visibility, {
                toValue: 0,
                duration: 300,
            }).start(() => {
                this.setState({visible: false});
                callback && callback()
            });
        } else
            this.setState({visible: false});
    }

    render() {
        if (this.state.visible === false) return null;

        const containerStyle = {
            opacity: this._visibility.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 1],
            }),
        };
        // @ts-ignore
        let TypeLinearGradient = Animated.LinearGradient;
        return (
            <TypeLinearGradient colors={['#247d9b', '#4da0b7', '#87d1de']}
                                style={[{position: 'absolute', left: 0, top: 0, right: 0, bottom: 0}, containerStyle]}>
                <Col flex={1} dial={5}>
                    <Image source={this.props.appIcon}
                           style={{width: 80, height: 80}}/>
                    <TextCustom value={this.state.appName} style={{color: "#063d52", fontSize: 27, marginTop: 23}}/>
                    <AnimatedEllipsis style={{marginTop: 80}} dotStyle={{fontSize: 50, color: "#063d52"}}/>
                    <TextCustom value="Loading" style={{color: "#063d52", fontSize: 16, marginTop: 3}}/>
                </Col>
            </TypeLinearGradient>
        )
    }
}
