import * as React from 'react';
import './Button.css';

export interface Props {
  label?: string;
  active?: boolean;
  fill?: boolean;
}

export interface State {}

export default class Button extends React.Component<Props, State> {

  public static defaultProps: Props = {
    label: 'World',
    active: false,
    fill: false,
  };

  render() {
    const { active, fill, label } = this.props;
    return (
      <div
        className={`Button ${
        active
          ? fill
          ? `active fill`
          : `active no-fill`
          : `disabled`
        }`}
      >
        {label}
      </div>
    );
  }
}
