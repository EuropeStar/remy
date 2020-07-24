import React from "react"
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import { PrivateRoute } from "./PrivateRoute";
import Wrapper from "../components/Wrapper";
import PageWrapper from "../components/PageWrapper";
import paths from './paths';

export const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path={paths.login} render={(props) => 
                    <Wrapper>
                        <Login {...props} />
                    </Wrapper>
                }>
                </Route>
                {/* Inner site pages */}
                <PageWrapper>
                    <PrivateRoute path={paths.dashsboard}>
                        <Dashboard />
                    </PrivateRoute>
                </PageWrapper>
                <Redirect to={paths.login} />
            </Switch>
        </BrowserRouter>
    )
}