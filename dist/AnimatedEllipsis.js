import React, { Component } from 'react';
import { Text, Animated, View } from 'react-native';
export class AnimatedEllipsis extends Component {
    constructor(props) {
        super(props);
        this.animationState = {
            dot_opacities: this.initializeDots(),
            target_opacity: 1,
            should_animate: true,
        };
    }
    initializeDots() {
        let opacities = [];
        for (let i = 0; i < this.props.numberOfDots; i++) {
            let dot = new Animated.Value(this.props.minOpacity);
            opacities.push(dot);
        }
        return opacities;
    }
    componentDidMount() {
        this.animate_dots(0);
    }
    componentWillUnmount() {
        this.animationState.should_animate = false;
    }
    animate_dots(which_dot) {
        if (!this.animationState.should_animate)
            return;
        // swap fade direction when we hit end of list
        if (which_dot >= this.animationState.dot_opacities.length) {
            which_dot = 0;
            let min = this.props.minOpacity;
            this.animationState.target_opacity = this.animationState.target_opacity === min ? 1 : min;
        }
        let next_dot = which_dot + 1;
        Animated.timing(this.animationState.dot_opacities[which_dot], {
            toValue: this.animationState.target_opacity,
            duration: this.props.animationDelay,
        }).start(this.animate_dots.bind(this, next_dot));
    }
    render() {
        let dots = this.animationState.dot_opacities.map((o, index) => <Animated.View key={index} style={{ opacity: o }}>
                <Text style={this.props.dotStyle}>.</Text>
            </Animated.View>);
        return (<View style={[{ flexDirection: "row" }, this.props.style]}>
                {dots}
            </View>);
    }
}
AnimatedEllipsis.defaultProps = {
    numberOfDots: 3,
    animationDelay: 300,
    minOpacity: 0,
    dotStyle: {
        color: '#aaa',
        fontSize: 35,
    }
};
