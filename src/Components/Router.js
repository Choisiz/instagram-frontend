import React from "react";
import Proptype from "prop-types";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Feed from "../Routes/Feed";
import Auth from "../Routes/Auth";


const LoggedInRoutes = () => <><Route exact path="/" component={Feed}></Route></>

const LoggedOutRoutes = () => <><Route exact path="/" component={Auth}></Route></>


const AppRouter = ({isLoggedIn}) => (
    <Router>
        <Switch>
            { isLoggedIn ? <LoggedInRoutes/> : <LoggedOutRoutes/> }
        </Switch>
    </Router>
);

Router.Proptype = {
    isLoggedIn: Proptype.bool.isRequired
}

export default AppRouter;