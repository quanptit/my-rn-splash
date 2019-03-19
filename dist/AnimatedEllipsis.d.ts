import { Component } from 'react';
import { StyleProp, TextStyle, ViewStyle } from 'react-native';
interface Props {
    numberOfDots?: number;
    animationDelay?: number;
    minOpacity?: number;
    style?: StyleProp<ViewStyle>;
    dotStyle?: StyleProp<TextStyle>;
}
export declare class AnimatedEllipsis extends Component<Props> {
    static defaultProps: Props;
    private animationState;
    constructor(props: any);
    private initializeDots;
    componentDidMount(): void;
    componentWillUnmount(): void;
    animate_dots(which_dot: any): void;
    render(): JSX.Element;
}
export {};
