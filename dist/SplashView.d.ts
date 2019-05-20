import { PureComponent } from 'react';
import { ImageRequireSource } from "react-native";
interface Props {
    appIcon: ImageRequireSource;
}
export declare class SplashView extends PureComponent<Props, {
    appName: string;
    visible: boolean;
}> {
    private _visibility;
    constructor(props: any);
    componentDidMount(): Promise<void>;
    hide(callback?: VoidFunction, isUsingAnim?: boolean): void;
    render(): JSX.Element;
}
export {};
