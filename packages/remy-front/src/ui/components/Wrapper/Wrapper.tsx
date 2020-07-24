import React from 'react';
import './Wrapper.scss';


export const Wrapper: React.FC = (props: React.PropsWithChildren<{}>): JSX.Element => {
    return (

        <div className="container ComponentWrapper">
            {props.children}
        </div>
    )
}