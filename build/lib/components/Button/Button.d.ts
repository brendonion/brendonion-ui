import * as React from 'react';
export interface Props {
    label?: string;
    active?: boolean;
    fill?: boolean;
}
export interface State {
}
export default class Button extends React.Component<Props, State> {
    static defaultProps: Props;
    render(): JSX.Element;
}
