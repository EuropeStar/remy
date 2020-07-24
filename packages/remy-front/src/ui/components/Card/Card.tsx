import React from 'react';
import "./Card.scss";

interface CardProps {
    className?: string
}

export const Card = (props: React.PropsWithChildren<CardProps>): JSX.Element => {
    return (
        <div className={`Card ${props.className}`}>
            {props.children}
        </div>
    )
}