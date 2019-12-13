import { OverwriteProps } from './FlexibleTabBarComponent';
interface Any {
    defaultFlexValue?: number;
    activeFlexValue?: number;
    tabBarHeight?: number;
}
declare const withCustomStyle: (overwriteProps: OverwriteProps & Any) => (Component: any) => any;
export default withCustomStyle;
