import React from 'react';
import { Redirect, RouteProps } from 'react-router-dom';

// TODO: mock func checks user is authenticated
const userIsAuthenticated = () => localStorage.getItem('auth');

export const PrivateRoute = (props: RouteProps): JSX.Element => {
    let isAuth = userIsAuthenticated();
    if (!isAuth) {
        return <Redirect to="/login"/>
    }
    return (<>{props.children}</>)
}