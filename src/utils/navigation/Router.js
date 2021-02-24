import React from 'react';
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';
import DashboardPage from "../../pages/DashboardPage";

const Router = () => {


    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={DashboardPage} />
                <Route render={() => <Redirect to="/" />} />
            </Switch>
        </BrowserRouter>
    );
};

export default Router;
