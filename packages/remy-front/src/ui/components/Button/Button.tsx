import React from 'react';
import './Button.scss';

enum ButtonType {
    PRIMARY = "Button-primary"
}

type ButtonProps = React.PropsWithChildren<{
    type?: ButtonType
}>

export const Button: React.FC<ButtonProps> = (props: ButtonProps): JSX.Element => {
    return <button className={`Button ${props.type}`}>{props.children}</button>
}

Button.defaultProps = {
    type: ButtonType.PRIMARY
}