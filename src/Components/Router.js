import React from "react";
import Proptype from "prop-types";
import { Route, Switch } from "react-router-dom";
import Auth from "../Routes/Auth";
import Feed from "../Routes/Feed";


const LoggedInRoutes = () => (
    <>
        <Route exact path="/" component={Feed} />
    </>
);

const LoggedOutRoutes = () => (
    <>
        <Route exact path="/" component={Auth} />
    </>
);


const AppRouter = ({isLoggedIn}) => (
        <Switch>
            { isLoggedIn ? <LoggedInRoutes/> : <LoggedOutRoutes/> }
        </Switch>
);

Router.Proptype = {
    isLoggedIn: Proptype.bool.isRequired
}

export default AppRouter;